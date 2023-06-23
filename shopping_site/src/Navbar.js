import { NavLink } from "react-router-dom";
import "./Navbar.css";
import React from "react";

function Navbar() {
  return (
    <div className="nav_bar">
      <div className="nav_content">
        <div id="nav_icon">
          <img
            src={require("./images/icons8-shopify-144.png")}
            alt="main_icon"
          ></img>
        </div>
        <div className="cart_content">
          <NavLink id="home" to="/">
            Home
          </NavLink>
          <div>
            <NavLink to="/checkout">
              <img
                src={require("./images/icons8-shopping-cart.gif")}
                alt="shop_icon"
              ></img>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
