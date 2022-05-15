import React, { useEffect } from "react";
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';

const LandingsCard = (props) => {

  const { id, name, year, geolocation, mass, date } = props.data
  const [params, setParams] = useSearchParams();

  const removeLanding = () => {
    axios({
      method: 'delete',
      url: "http://localhost:5000/api/astronomy/landings/delete",
      data: { id: id },
    })
    props.remove();
  }

/*   useEffect(() => {
    setParams({
      id: id,
      name: name,
      year: year,
      geolocation: geolocation,
      mass: mass,
      date: date
    })


  },[]) */


  return <article className="landing-card">
    <h3>name: {name}</h3>
    {id ? <p>landing id#{id}</p> : ""}
    {geolocation ? <p>geolocation: lat:{geolocation.latitude} lon: {geolocation.longitude} </p> : ""}
    {year ? <p>date: {year}</p> : ""}
    {date ? <p>date: {date}</p> : ""}
    {mass ? <p>mass: {mass}</p> : ""}
    <button className="button1" onClick={removeLanding}>Remove landing</button>
    <button className="button1">Add to cart</button>
    <Link to={`/landingsform/${id}`}><button className="button1">Edit landing</button></Link>

  </article>;
};

export default LandingsCard;
