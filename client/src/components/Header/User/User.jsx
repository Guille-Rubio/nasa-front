import React, { useState } from "react";
import cart from '../../../assets/img/cart.jpg';




const User = () => {

  const [user, setUser] = useState("pepe")
  const [userMode, setUserMode] = useState("login")


  const handleSignUp = (event) => {
    console.log("sign up " + event.target)
    //http request to create user
    //is answer ok setUser to user
  }

  const handleLogin = (event) => {
    console.log(event)
    setUser("pepe")
    setUserMode("loged")
  }

  const handleLogout = () => {
    setUser("")
    setUserMode("login")

  }

  const setSignUpMode = () => {
    setUserMode("signup")
  }

  const setLogInMode = () => {
    setUserMode("login")
  }




  return <div className="user">

    {userMode === "signup" ? <>
      <form className="user__form">
        <div>
          <input type="text" placeholder="user" name="user" />
          <input type="password" placeholder="password" name="password" />
          <input type="password" placeholder="confirm password" name="password2" />
        </div>
        <button className="header__button-container button1" onClick={handleSignUp}>signup</button>
        <button className="header__button-container button1" onClick={setLogInMode}>login</button>

      </form>
    </> : ""}

    {userMode === "login" ? <>
      <form className="user__form">
        <input type="text" placeholder="user" name="user" />
        <input type="password" placeholder="password" name="password" />
        <button className="header__button-container button1" onClick={handleLogin}>login</button>
        <button className="header__button-container button1" onClick={setSignUpMode}>signup</button>
      </form>
    </> : ""}

    {userMode === "loged" ? <>
      <button className="header__button-container button1" onClick={handleLogout}>logout</button>
      <p>hi {user}</p>
      <img className="cart-icon" src={cart} alt="cart"></img>
    </>:""}





  </div>;
};

export default User;
