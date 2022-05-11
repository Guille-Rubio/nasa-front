import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import NeasCard from "./NeasCard/NeasCard";
import { Scroll } from 'react-scroll-component';
import {scrollConfig} from '../../../utils/scroll_config';

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


  }, [])

 



  return <section className="neas-list">NeasList
    <h1 className="neas-list__h1">NeasList</h1>
    <Link to="/createneas"><button className="button1">Add new neas</button></Link>
    <Scroll {...scrollConfig}>
    <section className="neas-list__card-container">
      {neas.map(nea => <NeasCard data={nea} />)}
    </section>
    </Scroll>
    
  </section>;
}

export default NeasList;
