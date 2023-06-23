import "./Fragment.css";
import Card from "./Card";
import { useState } from "react";

function Fragment(props) {
  const [getData, setData] = useState(0);
  const [getCard, setCard] = useState(0);
  const [isNext, setNext] = useState(false);

  function handleCard() {
    setData(Math.floor(Math.random() * 5));
    // setCard(getData);
    console.log(getData);
    setNext(false);
  }

  function handleNext() {
    let id = getCard;
    setCard((id + 1) % 5);
    console.log(getCard);
    setNext(true);
  }
  function handlePrev() {
    let id = getCard;
    if (id <= 0) {
      setCard(4);
    } else {
      setCard(id - 1);
      setNext(true);
    }
    console.log(getCard);
  }

  return (
    <div className="main_container">
      <div className="title_container">
        <h2>Our Testimonials</h2>
      </div>
      <Card id={getData} data={props.data} handler={getCard} isNext={isNext} />
      <button onClick={handlePrev}>prev</button>
      <button onClick={handleNext}>next</button>
      <button onClick={handleCard}>Surprise Me</button>
    </div>
  );
}

export default Fragment;
