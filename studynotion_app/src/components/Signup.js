import "./Signup.css";
import React from "react";
import ColorButton from "./ColorButton";

function Signup() {
  return (
    <div className="signup_page">
      <div className="signup_container">
        <div>
          <h1>Join the millions learning to code with StudyNotion for free</h1>
          <p>
            Build skills for today, tomorrow and beyond{" "}
            <span>
              <i>Education to future-proof your career</i>
            </span>
          </p>
        </div>
        <div>
          <ColorButton />
        </div>
      </div>
      <div>
        <img src={require("./assets/signup.png")} alt=""></img>
      </div>
    </div>
  );
}

export default Signup;
