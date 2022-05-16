import React, { useState } from "react";
import { Link } from 'react-router-dom';
import cart from '../../../assets/img/cart.jpg';
import axios from "axios";


const User = () => {

  const [user, setUser] = useState("");
  const [userMode, setUserMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSignUp = async (event) => {
    if (password === password2) {
      event.preventDefault();
      console.log(email, password);
      try {
        const request = await axios({
          url: "http://localhost:5000/users/signup",
          method: 'post',
          data: {
            email: email,
            password: password
          }
        })
        alert(`new user ${email} registered`);
        console.log(request);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("passwords don't match");
      //add login function
    }
    //SET ACTIVE USER WITH REDUX
   
    setUserMode("loged");
    setUser(email);
    setEmail("");
    setPassWord("");
    setPassword2("");
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const request = await axios({
        url: "http://localhost:5000/users/login",
        method: 'post',
       /*  withCredentials:true, */
        data: {
          email: email,
          password: password
        }
      })

      const response = await request.data;
      console.log("response", response);
    } catch (error) {
      console.log(error);

    }

    //SET ACTIVE USER WITH REDUX
    setUserMode("loged");
    setUser(email);
    setEmail("");
    setPassWord("");
  }

  const handleLogout = () => {
    setUser("");
    setPassWord("");
    /* axios({
      url:'http://localhost:5000/users/logout',
      method:'get'
    }) */
    //EMPTY ACTIVE USER WITH REDUX
    setUserMode("login");
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
      <Link to="/cart"><img className="cart-icon" src={cart} alt="cart" /></Link>
    </> : ""}

  </div>;
};

export default User;
