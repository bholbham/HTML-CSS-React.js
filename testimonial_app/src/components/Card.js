import "./Card.css";

function Card(props) {
  const data = props.data;
  const isNext = props.isNext;
  const nextCards = props.handler;
  const A = isNext ? data[nextCards] : data[props.id];
  // console.log(A);
  return (
    <div className="card_container">
      <div className="image_container">
        <img src={A.image} alt="profile-img"></img>
      </div>
      <div className="bio">
        <h3>{A.name}</h3>
        <h3>{A.job}</h3>
      </div>
      <div className="about_me">
        <p>{A.text}</p>
      </div>
    </div>
  );
}

export default Card;
