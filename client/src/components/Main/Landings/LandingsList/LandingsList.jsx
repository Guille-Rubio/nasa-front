import React from "react";
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { v4 as uuidV4 } from 'uuid';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Scroll } from 'react-scroll-component';
import { scrollConfig } from '../../../../utils/scroll_config';
import Pages from '../LandingsList/Pages';
import LandingsCard from "./LandingsCard/LandingsCard";


function LandingsList(props) {

    const [landings, setLandings] = useState([]);
    const [coordinates, setCoordinates ] = useState([])
    const [filter, setFilter] = useState("");

    const from = useRef()
    const to = useRef()

    const position = [40.4168, -3.7038];

    /*    const rockIcon = {
           iconUrl: 'leaf-green.png',
           shadowUrl: 'leaf-shadow.png',
           iconSize: [38, 95], 
           iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
           shadowAnchor: [4, 62],  // the same for the shadow
           popupAnchor: [-3, -76]
       } */

    useEffect(() => {

        const fetchLandings = async () => {
            try {
                const request = await axios.get(`http://localhost:5000/api/astronomy/landings/${filter}`);
                const response = await request.data;
                console.log(request);
                const locatedLandings = response.filter(landing => landing.geolocation !== "")
                console.log(locatedLandings)
                const landingsCoordinates = locatedLandings.map(landing => landing.geolocation ? [landing.geolocation.latitude, landing.geolocation.longitude] : [0, 0])
                setCoordinates(landingsCoordinates)
                setLandings(response)
            } catch (error) {
                console.log(error);

            }
        }
        fetchLandings()

    }, [filter])

    const handleClass = (event) => {
        event.preventDefault();

        if (!event.target.value) {
            return
        }

        setFilter(`class/${event.target.value}`)
    }

    const handleMass = (event) => {
        event.preventDefault();
        if (!event.target.value) {
            return
        }

        setFilter(`mass/${event.target.value}`)
    }

    const handleDate = (event) => {
        event.preventDefault();
        console.log(from.current.value)
        setFilter(`?from=${from.current.value}&to=${to.current.value}`)
    }


    return (<div className="landing-list">
        {/*  <Scroll {...scrollConfig}> */}
        <section className="landing-list__form-container">
            <form>
                <div className="input__group">
                    <label className="input__label" htmlFor="class">class</label>
                    <input className="input__field" type="text" name="class" placeholder="class" id="class" onChange={handleClass} />
                </div>
                <div className="input__group">
                    <label className="input__label" htmlFor="class">mass</label>
                    <input className="input__field" type="text" name="mass" placeholder="mass" onChange={handleMass} />
                </div>
                <div className="input__group">
                    <label className="input__label" htmlFor="class">date from</label>
                    <input className="input__field" type="text" name="from" placeholder="date from" ref={from} />
                </div>
                <div className="input__group">
                    <label className="input__label" htmlFor="class">date to</label>
                    <input className="input__field" type="text" name="to" placeholder="date to" ref={to} />

                </div>
            </form>
            <div>
                <button className="button1" onClick={handleDate}>Search by date</button>
                <Link to="/createlanding"><button className="button1">Add new landing</button></Link>
            </div>
            {landings ? <p>{landings.length} landings </p> : ""}
        </section>
        <section>
            <h1>Map</h1>
            <div className="map" id="map">

                <MapContainer
                    center={position} zoom={2} scrollWheelZoom={true} >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {coordinates ? coordinates.map(landing => <Marker position={landing} key={uuidV4()}></Marker>) : ""}

                </MapContainer>
            </div>
        </section>
        <section>

            {landings.map((landing, i) => <LandingsCard className="landings-card" data={landing} key={uuidV4()} index={i} />)}

        </section>

        {/*  </Scroll> */}
    </div >)
}

export default LandingsList;