import React from "react";
import { Link } from 'react-router-dom';

function Home(props) {

  return <div>
    <h1>Home</h1>
    <Link to="/landings"><button>Asteroids</button></Link>
    <Link to="/neas"><button>Neas</button></Link>
  </div>;
}

export default Home;
