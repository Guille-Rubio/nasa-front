import React , {useState} from "react";
import { Link } from 'react-router-dom'
import burger from '../../../assets/img/burger.png';

function Nav(props) {
  const [visible, setVisible] = useState("hidden")

  const open = () => {
    visible === "visible" ? setVisible("hidden") : setVisible("visible")
    
  }
  

  return <nav className="navbar">
    <img src={burger} className="burger" onClick={open} alt="burger icon"></img>
    <Link className={`${visible}`} to="/landings">Asteroids</Link>
    <Link className={`${visible}`} to="/neas">Neas</Link>
    <Link className={`${visible}`} to="/">Home</Link>
  </nav>;
}


export default Nav;
