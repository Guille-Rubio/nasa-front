import React from "react";
import Nav from './Nav/Nav';
import nasa from '../../assets/img/nasa.png';


function Header(props) {

  return <div className="header">
     <Nav />
    <img className="nasa-logo" src={nasa} alt="nasa logo"></img>
   
  </div>;

}

export default Header;
