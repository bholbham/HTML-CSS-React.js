import "./StudentForm.css";
import React from "react";
import Form from "./Form";

function StudentForm() {
  return (
    <div>
      <form className="form_page">
        <div>
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname"></input>
        </div>
        <div>
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname"></input>
        </div>
        <Form />
      </form>
    </div>
  );
}

export default StudentForm;
