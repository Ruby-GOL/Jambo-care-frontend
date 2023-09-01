import React from "react";
import "./homepage.css";
import aqualight from "../../assets/aqualight.png";
import whitelight from "../../assets/whitelight.png";
import unity from "../../assets/unity.jpg";
import login from "../../assets/login.jpg";
import signup from "../../assets/signup.png";
import world from "../../assets/world.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="top-panel">
        <div className="top-imgs">
          <img src={world} className="world-img" alt="world" />
          <h1 className="home-title">
            Welcome to
            <span>JAMBO CARE</span>
            Translator app
          </h1>
          <img src={whitelight} className="white-img" alt="right-upper-img" />
        </div>

        <p className="home-text">
          This app is designed to help you communicate with your patients in
          their native language.
        </p>
      </div>
      <div className="bottom-panel">
        <div className="bottom-imgs">
          <div className="img-container">
            <img className="bottom-img" src={unity} alt="first-bottom-img" />
            <button className="button">Login</button>
          </div>
          <div className="img-container">
            <img className="bottom-img" src={login} alt="centre-bottom-image" />

            <button className="button">Signup</button>
          </div>
          <div className="img-container">
            <img className="bottom-img" src={signup} alt="last-bottom-image" />
            <button className="button">More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
