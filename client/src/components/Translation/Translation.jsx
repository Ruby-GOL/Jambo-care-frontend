import React, { usestate } from "react";
import "./translation.css";
import { AiFillPlayCircle } from "react-icons/ai";

const Translation = () => {
  return (
    <div className="languages-container">
      <div className="left-side">
        <h2 className="title">Text Translation</h2>
        <div className="translated-text">
          <input
            type="text"
            className="language"
            // value={language}
            // onChange={(e) => setLanguage(e.target.value)}
            placeholder="SWAHILI"
          />
        </div>
      </div>
      <div className="right-side">
        <h2 className="audio-title"> Audio Translation</h2>
        <div className="speech-arena">
          <input
            type="text"
            className="language"
            // value={language}
            // onChange={(e) => setLanguage(e.target.value)}
            placeholder="SWAHILI"
          />
          <div className="recorded">
            <AiFillPlayCircle size={20} className="icons" />
            <p className="breakline">
              ------------------------------------------------
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translation;
