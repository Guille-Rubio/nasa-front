import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const LandingsCard = (props) => {
  const { id, name, year, geolocation, mass, date } = props.data
  //HAY QUE METER ESTE COMPONENTE DENTRO DE OTRO??

  const removeLanding = () => {
    axios({
      method:'delete',
      url:"http://localhost:5000/api/astronomy/landings/delete",
      data:{id:id},
    })
    props.remove();

  }




  return <article className="landing-card">
    <h3>name: {name}</h3>
    {id ? <p>landing id#{id}</p> : ""}
    {geolocation ? <p>geolocation: lat:{geolocation.latitude} lon: {geolocation.longitude} </p> : ""}
    {year ? <p>date: {year}</p> : ""}
    {date ? <p>date: {date}</p> : ""}
    {mass ? <p>mass: {mass}</p> : ""}
    <button className="button1" onClick={removeLanding}>Remove landing</button>
    <button className="button1">Add to cart</button>
    <Link to="/landingsform"><button className="button1">Edit landing</button></Link>

  </article>;
};

export default LandingsCard;
