import React from "react";
import {Link} from 'react-router-dom';

function Footer(props) {

  return <footer className="footer">
    <Link className="button2" to="/landings">Asteroids</Link>
    <Link className="button2" to="/neas">Neas</Link>
    <Link className="button2" to="/">Home</Link>

  </footer>;
}


export default Footer;
