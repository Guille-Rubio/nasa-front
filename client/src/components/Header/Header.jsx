import React from "react";
import Nav from './Nav/Nav';
import nasa from '../../assets/img/nasa.png';


function Header(props) {

  return <header className="header">
     <Nav />
    <img className="nasa-logo" src={nasa} alt="nasa logo"></img>
   
  </header>;

}

export default Header;
