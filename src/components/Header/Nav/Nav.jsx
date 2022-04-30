import React from "react";
import { Link } from 'react-router-dom'

function Nav(props) {

  return <div>
    <Link to="/landings">Asteroids</Link>
    <Link to="/neas">Neas</Link>
    <Link to="/">Home</Link>
  </div>;
}


export default Nav;
