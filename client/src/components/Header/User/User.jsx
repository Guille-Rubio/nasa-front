import React, { useState } from "react";
import cart from '../../../assets/img/cart.jpg';
import axios from "axios";


const User = () => {

  const [user, setUser] = useState("pepe");
  const [userMode, setUserMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [password2, setPassword2] = useState("");


  const handleSignUp = async (event) => {
    event.preventDefault()


    console.log(email, password)
    try {
      
      const request = await axios({
        url: "http://localhost:5000/users/signup",
        method: 'post',
        data: {
          email:email,
          password:password}
     
      }) 
    console.log(request)
    }catch (error) {
        console.log(error)
      
    }
    

    //http request to create user
    //is answer ok setUser to user
  }

  const handleLogin = (event) => {
    event.preventDefault();
    
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

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassWord(event.target.value)
  }

  const handlePassword2 = (event) => {
    setPassword2(event.target.value)
  }


  return <div className="user">

    {userMode === "signup" ? <>
      <form className="user__form" onSubmit={handleSignUp}>
        <div>
          <input type="text" placeholder="email" name="email" onChange={handleEmail} />
          <input type="password" placeholder="password" name="password" onChange={handlePassword} />
          <input type="password" placeholder="confirm password" name="password2" onChange={handlePassword2} />
        </div>
        <button className="header__button-container button1" type="submit" value="submit">signup</button>
        <button className="header__button-container button1" onClick={setLogInMode}>login</button>

      </form>
    </> : ""}

    {userMode === "login" ? <>
      <form className="user__form" onSubmit={handleLogin}>
        <input type="text" placeholder="email" name="email" onChange={handleEmail} />
        <input type="password" placeholder="password" name="password" onChange={handlePassword} />
        <button className="header__button-container button1" type="submit">login</button>
        <button className="header__button-container button1" onClick={setSignUpMode}>signup</button>
      </form>
    </> : ""}

    {userMode === "loged" ? <>
      <button className="header__button-container button1" onClick={handleLogout}>logout</button>
      <p>hi {user}</p>
      <img className="cart-icon" src={cart} alt="cart"></img>
    </> : ""}





  </div>;
};

export default User;
