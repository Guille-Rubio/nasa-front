import React from "react";
import Nav from './Nav/Nav';
import nasa from '../../assets/img/nasa.png';
import { Link } from 'react-router-dom'
import User from "./User/User";



function Header(props) {

  return <header className="header">
    <Nav />
    <User />
    <Link to="/"><img className="nasa-logo" src={nasa} alt="nasa logo"></img></Link>


  </header>;

}

export default Header;
