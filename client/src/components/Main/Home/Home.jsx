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
      } catch (err) {
        console.log(err)
      }
    }

    getApod()
  }, [])


  return <div className='home'>
    <div  className="home__nasa-image" style={{ 
      backgroundImage: `url(${apod})`,  backgroundImageRepeat:"no-repeat",
      backgroundSize:"cover"
    }}>
      <h1>Home  </h1>
      <Link to="/landings"><button className="button1">Asteroids</button></Link>
      <Link to="/neas"><button className="button1">Neas</button></Link>
    </div>
  </div>
;
}

export default Home;
