import React from "react";
import { Link } from 'react-router-dom';
import LandingsList from "./LandingsList/LandingsList";



function Landings(props) {
 

  return <div>
    <h1>Landings</h1>
    <div>Map</div>
    <section><LandingsList/></section>
    <div>Filters</div>
    <Link to="/createlanding"><button>Add new landing</button></Link>

  </div>;

}

export default Landings;
