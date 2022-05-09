import React from "react";
import { Link } from 'react-router-dom';
//import axios from 'axios';

//const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY

function Home(props) {

/*   async function getApod() {
    const request = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
    const apod = await request.data.hdurl;
    console.log(apod)
    return apod
  } */

  


  return <div className='home'>
    <h1>Home  </h1>
    <Link to="/landings"><button>Asteroids</button></Link>
    <Link to="/neas"><button>Neas</button></Link>
  </div>;
}

export default Home;
