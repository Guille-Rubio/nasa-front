import React from "react";

function LandingsForm(props) {

  return <div className="landings-form">
    <h1>Add a new landing</h1>
    <form className="landings-form__form">
      <div className="input__group">
        <label className="input__label" htmlFor="name">name</label>
        <input className="input__field" type="text" name="name" placeholder="name" id="name" />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="id">id</label>
        <input className="input__field" type="text" name="id" placeholder="id" id="id" />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="nametype">nametype</label>
        <input className="input__field" type="text" name="nametype" placeholder="nametype" id="nametype" />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="recclass">recclass</label>
        <input className="input__field" type="text" name="recclass" placeholder="recclass" id="recclass" />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="mass">mass</label>
        <input className="input__field" type="text" name="mass" placeholder="mass" id="mass" />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="fall">fell</label>
        <input className="input__field" type="text" name="fall" placeholder="fall" id="fall" />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="year">year</label>
        <input className="input__field" type="text" name="year" placeholder="year" id="year" />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="reclat">recclat</label>
        <input className="input__field" type="text" name="reclat" placeholder="reclat" id="reclat" />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="reclong">reclong</label>
        <input className="input__field" type="text" name="reclong" placeholder="reclong" id="reclong" />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="latitude">latitude</label>
        <input className="input__field" type="text" name="latitude" placeholder="latitude" id="latitude" />
      </div>
      <div className="input__group">
        <label className="input__label" htmlFor="longitude">longitude</label>
        <input className="input__field" type="text" name="longitude" placeholder="longitude" id="longitude" />
      </div>
      <div>
        <button type="submit" className="button1">Add landing</button>
      </div>
    </form>

  </div>;

}


export default LandingsForm;
