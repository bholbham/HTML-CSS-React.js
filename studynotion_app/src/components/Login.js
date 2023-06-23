import Form from "./Form";
import "./Login.css";
import React from "react";

function Login() {
  return (
    <div className="login_main_div">
      <div className="first_container">
        <div>
          <h1>Welcome Back</h1>
          <p>
            Build skills for today, tomorrow and beyond{" "}
            <span>
              <i>Education to future-proof your career</i>
            </span>
          </p>
        </div>
        <Form />
      </div>
      <div className="image-background">
        <img id="image" src={require("./assets/login.png")} alt=""></img>
      </div>
    </div>
  );
}

export default Login;
