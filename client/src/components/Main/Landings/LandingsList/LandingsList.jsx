import React from "react";
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import { v4 as uuidV4 } from 'uuid';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function LandingsList(props) {

    const [landings, setLandings] = useState([]);
    const [filter, setFilter] = useState("");

    const from = useRef()
    const to = useRef()

    const position = [40.4168, -3.7038];

    useEffect(() => {

        const fetchLandings = async () => {
            try {
                const request = await axios.get(`http://localhost:5000/api/astronomy/landings/${filter}`);
                const response = await request.data;
                console.log(request);
                //filtro
                const locatedLandings = response.filter(landing => landing.geolocation !== "")
                console.log(locatedLandings)
                const landingsCoordinates = locatedLandings.map(landing => landing.geolocation ? [landing.geolocation.latitude, landing.geolocation.longitude] : [0, 0])
                /* landing.geolocation.latitude = parseFloat(landing.geolocation.latitude); */
                /* landing.geolocation.longitude = parseFloat(landing.geolocation.longitude); */

                setLandings(landingsCoordinates)
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


    return (<div>
        <section>
            <form>
                <input type="text" name="class" placeholder="class" onChange={handleClass} />
                <input type="text" name="mass" placeholder="mass" onChange={handleMass} />
                <input type="text" name="from" placeholder="date from" ref={from} />
                <input type="text" name="to" placeholder="date to" ref={to} />
                <button className="button1" onClick={handleDate}>Search by date</button>
            </form>
            <section>
                <h1>Map</h1>
                <div className="map" id="map">

                    <MapContainer
                        center={position} zoom={2} scrollWheelZoom={true} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        {landings ? landings.map(landing => <Marker position={landing} key={uuidV4()}></Marker>) : ""}

                    </MapContainer>
                </div>
            </section>

        </section>
    </div >)
}

export default LandingsList;