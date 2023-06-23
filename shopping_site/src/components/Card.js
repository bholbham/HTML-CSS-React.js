import React from "react";
import { products } from "./data";
import "./Card.css";

const data = products;

function Card() {
  function handleData() {}
  return (
    <div className="card_wrapper">
      {data.map((value) => {
        return (
          <div className="card_container">
            <div className="header">
              <p>{value.title.slice(0, 10)}</p>
            </div>
            <div>
              <p>{value.description.slice(0, 50)}</p>
            </div>
            <div className="card_image">
              <img src={value.image} alt="cart_image"></img>
            </div>
            <div className="price_action">
              <div>{`$${value.price}`}</div>
              <div>
                <button onClick={handleData}>Add to Cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
