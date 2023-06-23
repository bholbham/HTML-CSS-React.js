import { useEffect, useState } from "react";
import "./App.css";
import Fragment from "./components/Fragment";
import reviews from "./data";

function App() {
  const [getValue, setValue] = useState([]);

  async function GetInfo() {
    setValue(reviews);
    // console.log(getValue);
  }
  useEffect(() => {
    GetInfo();
  }, []);

  return (
    <div className="wrapper">
      <Fragment data={getValue} />
    </div>
  );
}

export default App;
