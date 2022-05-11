import React from "react";
import axios from 'axios';
import { Scroll } from 'react-scroll-component';
import { scrollConfig } from '../../../utils/scroll_config';

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
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })

    } catch (err) {
      console.log(err)
    }

  }

  return <section className="neas-form">
    <h1 className="neas-form__h1">Add your near Earth Asteroid</h1>
    <Scroll {...scrollConfig}>
      <form className="neas-form__form" onSubmit={handleSubmit}>

        <div className="input__group">
          <label className="input__label" htmlFor="designation">designation</label>
          <input className="input__field" type="text" name="designation" placeholder="designation" id="designation" />
        </div>
        <div className="input__group">
          <label className="input__label" htmlFor="discovery_date">discovery date</label>
          <input className="input__field" type="text" name="discovery_date" placeholder="discovery_date" id="discovery_date" />
        </div>
        <div className="input__group">
          <label className="input__label" htmlFor="h_mag">h_mag</label>
          <input className="input__field" type="text" name="h_mag" placeholder="h_mag" id="h_mag" />
        </div>
        <div className="input__group">
          <label className="input__label" htmlFor="moid_au">moid_au</label>
          <input className="input__field" type="text" name="moid_au" placeholder="moid_au" id="moid_au" />
        </div>
        <div className="input__group">
          <label className="input__label" htmlFor="q_au_1">q_au_1</label>
          <input className="input__field" type="text" name="q_au_1" placeholder="q_au_1" id="q_au_1" />
        </div>
        <div className="input__group">
          <label className="input__label" htmlFor="q_au_2">q_au_2</label>
          <input className="input__field" type="text" name="q_au_2" placeholder="q_au_2" id="q_au_2" />
        </div>
        <div className="input__group">
          <label className="input__label" htmlFor="period_yr">period_yr</label>
          <input className="input__field" type="text" name="period_yr" placeholder="period_yr" id="period_yr" />
        </div>
        <div className="input__group">
          <label className="input__label" htmlFor="i_deg">i_deg</label>
          <input className="input__field" type="text" name="i_deg" placeholder="i_deg" id="i_deg" />
        </div>
        <div className="input__group">
          <label className="input__label" htmlFor="pha">pha</label>
          <input className="input__field" type="text" name="pha" placeholder="pha" id="pha" />
        </div>
        <div className="input__group">
          <label className="input__label" htmlFor="orbit_class">orbit_class</label>
          <input className="input__field" type="text" name="orbit_class" placeholder="orbit_class" id="orbit_class" />
        </div>
        <div>
          <button className="button1" type="submit">Añadir/editar</button>

        </div>

      </form>

    </Scroll>

    
  </section>;
}

export default NeasForm;

