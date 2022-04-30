import React from "react";

function NeasForm(props) {

  return <div>
    <h1>NeasForm</h1>
    <form>
      <label htmlFor="">designation</label>
      <input type="text" />
      <label htmlFor="">discovery date</label>
      <input type="text" />
      <label htmlFor="">h mag</label>
      <input type="text" />
      <label htmlFor="">moid_au</label>
      <input type="text" />
      <label htmlFor="">q_au_1</label>
      <input type="text" />
      <label htmlFor="">q_au_2</label>
      <input type="text" />
      <label htmlFor="">period year</label>
      <input type="text" />
      <label htmlFor="">i deg</label>
      <input type="text" />
      <label htmlFor="">pha</label>
      <input type="text" />
      <label htmlFor="">orbit_class</label>
      <input type="text" />
      <button type="submit">Añadir/editar</button>
    </form>
  </div>;
}

export default NeasForm;
