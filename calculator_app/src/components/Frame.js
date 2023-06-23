import "./Frame.css";
import Calculator from "./Calculator";
import { useState } from "react";

function Frame() {
  const [getData, setData] = useState(0);

  function handleNumbers() {
    setData();
  }
  return (
    <div className="frame_wrapper">
      <div className="display" function={handleNumbers}>
        {getData}
      </div>
      <Calculator display={setData} />
    </div>
  );
}

export default Frame;
