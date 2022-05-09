import React from "react";
import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import LandingsCard from "./LandingsCard/LandingsCard";
import { v4 as uuidV4 } from 'uuid';

function LandingsList(props) {

    const [landings, setLandings] = useState();
    const [filter, setFilter] = useState({});

    const from = useRef()
    const to = useRef()

    useEffect(() => {

        const fetchLandings = async () => {
            try {
                const request = await axios.get(`http://localhost:5000/api/astronomy/landings/${filter}`);
                const response = await request.data;
                console.log(request);
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

    return (<div>
        <section>
            <form>
                <input type="text" name="class" placeholder="class" onChange={handleClass} />
                <input type="text" name="mass" placeholder="mass" onChange={handleMass} />
                <input type="text" name="from" placeholder="date from" ref={from} />
                <input type="text" name="to" placeholder="date to" ref={to} />
                <button onClick={handleDate}>Search by date</button>
            </form>
            <section>
                <h1>Map</h1>


            </section>

            <section className="landings-list__card-container">
                {landings ? landings.map(landing => <LandingsCard data={landing} key={uuidV4()} />) : ""}
            </section>
        </section>
    </div>)
}

export default LandingsList;