import React from "react";
import axios from 'axios';

function NeasForm(props) {


  const handleSubmit = (event) => {
    event.preventDefault();
    const { designation, discovery_date, h_mag, moid_au, q_au_1, q_au_2, period_yr, i_deg, pha, orbit_class } = event.target
    const newNeas = {
      designation: designation.value,
      discovery_date: discovery_date.value,
      h_mag: h_mag.value,
      moid_au: moid_au.value,
      q_au_1: q_au_1.value,
      q_au_2: q_au_2.value,
      period_yr: period_yr.value,
      i_deg: i_deg.value,
      pha: pha.value,
      orbit_class: orbit_class.value
    }
    console.log(newNeas)
    try {

      axios.post('//astronomy/neas/create', newNeas)
      .then(function(response){
        console.log(response)
      })
      .catch(function(error){
        console.log(error)
      })

    } catch (err) {
      console.log(err)
    }

  }




  return <section className="neas-form">
    <h1 className="neas-form__h1">NeasForm</h1>
    <form className="neas-form__form" onSubmit={handleSubmit}>

      <input type="text" name="designation" placeholder="designation"/>
   
      <input type="text" name="discovery_date" placeholder="discovery_date"/>

      <input type="text" name="h_mag" placeholder="h_mag"/>
  
      <input type="text" name="moid_au" placeholder="moid_au"/>

      <input type="text" name="q_au_1" placeholder="q_au_1"/>

      <input type="text" name="q_au_2" placeholder="q_au_2"/>

      <input type="text" name="period_yr" placeholder="period_yr"/>

      <input type="text" name="i_deg" placeholder="i_deg"/>

      <input type="text" name="pha" placeholder="pha"/>

      <input type="text" name="orbit_class" placeholder="orbit_class"/>
      <button className="button1" type="submit">Añadir/editar</button>
    </form>
  </section>;
}

export default NeasForm;
