import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';


function Home(props) {

  const [apod, setApod] = useState();

  useEffect(() => {
    async function getApod() {
      try {
        const request = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`);
        const picture = await request.data.hdurl;
        setApod(picture)
        console.log(picture)
      } catch (err) {
        console.log(err)
      }
    }

    getApod()
  }, [])


  return <div className='home'>
    <h1>Home  </h1>
    <Link to="/landings"><button>Asteroids</button></Link>
    <Link to="/neas"><button>Neas</button></Link>
    <img src={apod} alt="Nasa daily" className="home__nasa-image"></img>
  </div>;
}

export default Home;
