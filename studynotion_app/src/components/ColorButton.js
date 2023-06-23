import React, { useEffect, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Form from "./Form";
import StudentForm from "./StudentForm";

function ColorButton() {
  const [alignment, setAlignment] = useState("Student");
  const [isStudent, setStudent] = useState(true);
  const [isInstructor, setInstructor] = useState(true);

  const handleChange = (event) => {
    setAlignment(event.target.value);
  };

  useEffect(() => {
    if (alignment === "Student") {
      setStudent("true");
      setInstructor(!isInstructor);
    } else if (alignment === "Instructor") {
      setInstructor("true");
      setStudent(!isStudent);
    }
  }, [alignment]);

  return (
    <>
      <ToggleButtonGroup
        id="togglebutton"
        sx={{
          fontFamily: "poppins",
          backgroundColor: "yellow",
          width: "fit-content",
        }}
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="Student">Student</ToggleButton>
        <ToggleButton value="Instructor">Instructor</ToggleButton>
      </ToggleButtonGroup>

      {alignment === "Student" && isStudent && <StudentForm />}
      {alignment === "Instructor" && isInstructor && <Form />}
    </>
  );
}

export default ColorButton;
