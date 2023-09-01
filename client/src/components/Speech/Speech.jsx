import React from "react";
import "./speech.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsArrowRepeat } from "react-icons/bs";

import { IoWarningSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Speech = () => {
  return (
    <section className="speech-section">
      <h1 className="speech-title">Speech</h1>
      <div className="speech-container">
        <h2 className="speech-subtitle">Record Input</h2>
        <div className="recording-icons">
          <AiFillPlayCircle size={20} className="icons" />

          <BsArrowRepeat size={20} className="icons" />
          <p className="breakline">
            ------------------------------------------------
          </p>
        </div>
        <div className="instructions">
          <p>play</p>
          <p>Reset</p>
        </div>
      </div>

      <div className="disclaimer-container">
        <IoWarningSharp size={20} className="icons" />
        <p className="warning">
          Transalation of some languages may not be accurate due to limitations
          of data availability
        </p>
      </div>
      <div className="translation-container">
        <h2 className="translation-title">SELECT TRANSLATION LANGUAGES</h2>

        <div className="translation-options">
          <p className="translation-option">English</p>
          <p className="translation-option">French</p>
          <p className="translation-option">Spanish</p>
          <p className="translation-option">German</p>
          <p className="translation-option">Italian</p>
          <p className="translation-option">Chinese</p>
          <p className="translation-option">Japanese</p>
          <p className="translation-option">Korean</p>
          <p className="translation-option">Arabic</p>
          <p className="translation-option">Russian</p>
          <p className="translation-option">Hindi</p>
          <p className="translation-option">Portuguese</p>
          <p className="translation-option">Dutch</p>
          <p className="translation-option">Swedish</p>
          <p className="translation-option">Greek</p>
          <p className="translation-option">Romanian</p>
        </div>
      </div>
      <Link to="/translation">
        <button className="translate-button">Translate</button>
      </Link>
    </section>
  );
};

export default Speech;
