import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import NeasCard from "./NeasCard/NeasCard";

function NeasList(props) {

  const [neas, setNeas] = useState([]);
 

  useEffect(() => {

    const fetchNeas = async () => {
      try {
        const request = await axios.get(`http://localhost:5000/api/astronomy/neas`);
        const response = await request.data;
        console.log(request);

        setNeas(response)
      } catch (error) {
        console.log(error);
      }
    }
    fetchNeas()


  },[])


  return <div>NeasList
    <h1>NeasList</h1>
    <div>Map</div>
    <section className="neas-list__card-container">

      {neas.map(nea => <NeasCard data={nea} />)}
    </section>
    <div>Filters</div>
    <Link to="/createneas"><button>Add new neas</button></Link>
  </div>;
}

export default NeasList;
