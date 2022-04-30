import React from "react";
import { Link } from 'react-router-dom';

function NeasList(props) {

  return <div>NeasList
    <h1>NeasList</h1>
    <div>Map</div>
    <section>List of neas</section>
    <div>Filters</div>
    <Link to="/createneas"><button>Add new neas</button></Link>
  </div>;
}

export default NeasList;
