import React ,{ useState }from "react";
import "./loginpage.css";

import user_icon from "../Assets/person-icon.png";
import email_icon from "../Assets/email-icon.png";
import password_icon from "../Assets/password-login.jpg";
const Loginpage = () => {

const [action,setAction] = useState ("Sign Up");


  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action==="Login"?<div></div>:<div className="input">
          <img  style={{ width: 30, height: 30 }}src= {user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>}
        
        <div className="input">
          <img style={{ width: 30, height: 30 }} src={email_icon} alt="" />
          <input type="email" placeholder="Email Address"/>
        </div>
        <div className="input">
          <img  style={{ width: 30, height: 30 }}src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost password?<span> Click here!!</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
  );
};

export default Loginpage;
