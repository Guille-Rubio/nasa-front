import React from "react";
import { Link } from 'react-router-dom';


function LandingsList(props) {

  return <div>
    <h1>LandingsList</h1>
    <div>Map</div>
    <section>List of landings</section>
    <div>Filters</div>
    <Link to="/createlanding"><button>Add new landing</button></Link>

  </div>;

}

export default LandingsList;
