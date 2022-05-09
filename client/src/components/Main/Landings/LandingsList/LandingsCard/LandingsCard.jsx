import React from "react";

const LandingsCard = (props) => {
  const { id, name, year,geolocation, mass, date } = props.data


  return <article className="landing-card">
    {id?<h3>landing id#{id}</h3>:""}
    <p>name: {name}</p>
    <p>geolocation: lat{geolocation?geolocation.latitude:"Not available"}, lon:{geolocation?geolocation.longitude:"Not available"} </p>
    {year?<p>date: {year}</p>:""}
    {date?<p>date: {date}</p>:""}
    {mass?<p>mass: {mass}</p>:""}


  </article>;
};

export default LandingsCard;
