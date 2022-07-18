import React, { useState, useRef } from "react";
import "./regi.scss";
const Register = () => {
  return (
    <>
      <div className="login">
        <div className="top">
          {/* <div className="wrapper">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg "
              alt=""
            />
          </div> */}
        </div>
        <div className="container">
          <form>
            <h1 className="new">Register</h1>
            {/* <div> */}
             
              <input type="Name" placeholder="Name" />
              <input type="Email" placeholder="Your Manipal Email-ID" />
            {/* </div> */}
            {/* <div> */}
            <input type="Password" placeholder="Enter Password" />
            <input type="Password" placeholder="Confirm Password" />
            {/* </div> */}

            <button className="loginButton">Sign-Up</button>

            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
