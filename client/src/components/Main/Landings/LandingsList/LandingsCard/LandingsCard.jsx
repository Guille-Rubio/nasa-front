import React from "react";

const LandingsCard = (props) => {
  const { id, name, year,geolocation, mass, date } = props.data


  return <article className="landing-card">
    <h3>name: {name}</h3>
    {id?<p>landing id#{id}</p>:""}
    {geolocation?<p>geolocation: lat:{geolocation.latitude} lon: {geolocation.longitude} </p>:""}
    {year?<p>date: {year}</p>:""}
    {date?<p>date: {date}</p>:""}
    {mass?<p>mass: {mass}</p>:""}


  </article>;
};

export default LandingsCard;
