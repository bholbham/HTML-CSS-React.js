import "./Navigation.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="NavWrapper">
      <div>
        <img src={require("./assets/Logo.svg")} alt=""></img>
      </div>
      <div className="home-section">
        <div>
          <NavLink id="login" to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink to="/login" id="login">
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to="/signup" id="login">
            Sign up
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
