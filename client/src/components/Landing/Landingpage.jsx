import React from "react";
import "./landingpage.css";
import landing_pic from "../Assets/landing2.png";
import logo from "../Assets/logo3.png";
const Landingpage = () => {
  return (
    <section>
    <div className="landing">
    <img src={logo} alt=""/>
      <div className="header">
    
        <div className="logo">
       
        </div>
      
       
      </div>
      <div class="content">
        <div class="textBox">
           
          <h2>JAMBOCARE <span>TRANSLATOR APP</span></h2>
        
          <p> Jambo Care
            mission is to understand every voice. Translating speech to text and
            viceversa to assist healthworkers from every corner of the world in
            communication with Patients from different language
            backgrounds/dialect regions </p>
            
          <a href="">GET STARTED</a>
     
        </div>
        <div className="imgBx">
        <img src={landing_pic} alt="" /></div>
        </div>
       
     
   </div>
   </section>
  );
};

export default Landingpage;
