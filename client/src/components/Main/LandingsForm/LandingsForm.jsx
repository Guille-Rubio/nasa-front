import React, { useState } from "react";
import axios from 'axios';

function LandingsForm(props) {

  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const [nametype, setNametype] = useState("")
  const [recclass, setRecclass] = useState("")
  const [mass, setMass] = useState("")
  const [fall, setFall] = useState("")
  const [year, setYear] = useState("")
  const [reclat, setReclat] = useState("")
  const [reclong, setReclong] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  const handleChangeName = event => setName(event.target.value);
  const handleChangeId = event => setId(event.target.value);
  const handleChangenametype = event => setNametype(event.target.value);
  const handleChangeRecclass = event => setRecclass(event.target.value);
  const handleChangeMass = event => setMass(event.target.value);
  const handleChangefall = event => setFall(event.target.value);
  const handleChangeYear = event => setYear(event.target.value);
  const handleChangeReclat = event => setReclat(event.target.value);
  const handleChangeReclong = event => setReclong(event.target.value);
  const handleChangeLatitude = event => setLatitude(event.target.value);
  const handleChangeLongitude = event => setLongitude(event.target.value);

  const addNewLanding = (event) => {
    event.preventDefault()
    //validaciones 
    //post a API 
    try {
      axios({
        method: 'post',
        url: 'http://localhost:5000/api/astronomy/landings/create',
        data: {
          name: name,
          id: id,
          nametype: nametype,
          recclass: recclass,
          mass: mass,
          fall: fall,
          year: year,
          reclat: reclat,
          reclong: reclong,
          geolocation: {
            latitude: latitude,
            longitude: longitude
          }
        }
      })
    } catch (error) {
      console.log("there was an error, your new landing could not be saved")
    }
  }

  return <div className="landings-form">
    <h1>Add a new landing</h1>
    <form className="landings-form__form" onSubmit={addNewLanding}>
      <div className="input__group">
        <label className="input__label" htmlFor="name">name</label>
        <input className="input__field" type="text" name="name" placeholder="name" id="name" value={name} onChange={handleChangeName} />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="id">id</label>
        <input className="input__field" type="text" name="id" placeholder="id" id="id" value={id} onChange={handleChangeId} />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="nametype">nametype</label>
        <input className="input__field" type="text" name="nametype" placeholder="nametype" id="nametype" value={nametype} onChange={handleChangenametype} />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="recclass">recclass</label>
        <input className="input__field" type="text" name="recclass" placeholder="recclass" id="recclass" value={recclass} onChange={handleChangeRecclass} />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="mass">mass</label>
        <input className="input__field" type="text" name="mass" placeholder="mass" id="mass" value={mass} onChange={handleChangeMass} />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="fall">fell</label>
        <input className="input__field" type="text" name="fall" placeholder="fall" id="fall" value={fall} onChange={handleChangefall} />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="year">year</label>
        <input className="input__field" type="text" name="year" placeholder="year" id="year" value={year} onChange={handleChangeYear} />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="reclat">reclat</label>
        <input className="input__field" type="text" name="reclat" placeholder="reclat" id="reclat" value={reclat} onChange={handleChangeReclat} />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="reclong">reclong</label>
        <input className="input__field" type="text" name="reclong" placeholder="reclong" id="reclong" value={reclong} onChange={handleChangeReclong} />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="latitude">latitude</label>
        <input className="input__field" type="text" name="latitude" placeholder="latitude" id="latitude" value={latitude} onChange={handleChangeLatitude} />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="longitude">longitude</label>
        <input className="input__field" type="text" name="longitude" placeholder="longitude" id="longitude" value={longitude} onChange={handleChangeLongitude} />
      </div>
      <div>
        <button type="submit" className="button1">Add landing</button>
      </div>
    </form>

  </div>;

}


export default LandingsForm;
