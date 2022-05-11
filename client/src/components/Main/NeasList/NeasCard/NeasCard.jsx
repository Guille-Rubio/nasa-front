import React from "react";

const removeNea = () => {
  console.log("should remove nea")

}

const NeasCard = (props) => {
const {designation, discovery_date,h_mag, i_deg, moid_au, orbit_class, period_yr, pha, q_au_1, q_au_2 }= props.data

  return <div className="neas-card">
    <p>{designation}</p>
    <p>{discovery_date}</p>
    <p>{h_mag}</p>
    <p>{i_deg}</p>
    <p>{moid_au}</p>
    <p>{orbit_class}</p>
    <p>{period_yr}</p>
    <p>{pha}</p>
    <p>{q_au_1}</p>
    <p>{q_au_2}</p>
    <button className="button1" onClick={removeNea}>Borrar</button>
    <button className="button1">Añadir a carrito</button>
  </div>;
  
};

export default NeasCard;
