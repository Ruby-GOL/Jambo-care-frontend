import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import user_icon from "../Assets/person-icon.png";
import email_icon from "../Assets/email-icon.png";
import password_icon from "../Assets/password-login.jpg";

const Signuppage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email, password };
    console.log(data);
    axios
      .post("https://jambocare-556e6033d8b6.herokuapp.com/accounts/api/register/", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem('token', response.access)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="container">
      <div className="header">
        <div className="text">signup</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          {/* <div className="input">
            <img style={{ width: 30, height: 30 }} src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div> */}

          <div className="input">
            <img style={{ width: 30, height: 30 }} src={email_icon} alt="" />
            <input
              type="email"
              name={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
          </div>
          <div className="input">
            <img style={{ width: 30, height: 30 }} src={password_icon} alt="" />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              name={password}
              placeholder="Password"
            />
          </div>
        </div>

        <div className="forgot-password">
          Lost password?<span> Click here!!</span>
        </div>

        <div className="submit-container">
          <button className="submit" type="submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signuppage;
