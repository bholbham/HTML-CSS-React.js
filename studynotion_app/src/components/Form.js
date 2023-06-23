import "./Form.css";
import React from "react";

function Form() {
  return (
    <>
      <form className="form_page">
        <div>
          <label htmlFor="email">Enter your email</label>
          <input type="email" name="email"></input>
        </div>
        <div>
          <label htmlFor="password">Enter your password</label>
          <input type="password" name="password"></input>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;
