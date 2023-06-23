import "./Form.css";
import { useState } from "react";

function Form() {
  const option = ["India", "USA", "Canada", "UK", "Japan"];

  const [isClicked, setClicked] = useState(false);

  const check = [
    {
      id: "Comments",
      text: "Get notified when someone posts a comment on a posting",
    },
    {
      id: "Candidates",
      text: "Get notified when candidate applies for a Job",
    },
    {
      id: "Offers",
      text: "Get notified when someone accepts or rejects an offer",
    },
  ];

  const notifications = [
    "Everything",
    "Same as email",
    "No push notifications",
  ];

  //   const [isClicked, setClicked] = useState(false);

  const [getData, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postal: "",
    country: "",
    isVisible: false,
    notifications: "",
  });
  /*
  Points to remember :
  1. use name attribute to distinguish between each input field if you are using only one state to handle the form.
  2. use event.preventDefault() to prevent the default behaviour of the form that is controlled by the DOM. 
   */

  function handleData(event) {
    /*
    1. we are extracting all unique names that we have mentioned in our input field 
    2. we are extracting all unique values that are initialized to our useState object key
    3. then we are mapping each of the unique names with the values 
    */
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;

    // ...data is copying the fields along with our updation.

    setData((data) => {
      if (isClicked) {
        return {
          ...data,
          [name]: value,
        };
      }
    });
  }

  function handleForm(event) {
    event.preventDefault();
    console.log(getData);
  }

  // function handleState(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   const checked = event.target.checked;
  //   console.log("is clicked?", checked);
  //   if (checked) {
  //     setData((data) => ({ ...data, [name]: value }));
  //   }
  //   setClicked(!isClicked);
  // }
  return (
    <div className="form_data">
      <div className="text">
        <label>First Name</label>
        <input
          type="text"
          name="fname"
          placeholder="Firstname"
          onChange={handleData}
          value={getData.fname}
        ></input>
      </div>
      <div className="text">
        <label>Last Name</label>
        <input
          type="text"
          name="lname"
          placeholder="Lastname"
          onChange={handleData}
          value={getData.lname}
        ></input>
      </div>
      <div className="text">
        <label>Email id</label>
        <input
          type="email"
          name="email"
          placeholder="abc@example.com"
          onChange={handleData}
          value={getData.email}
        ></input>
      </div>
      <div className="text">
        <label>Country</label>
        <select onChange={handleData} value={getData.country} name="country">
          {option.map((data) => (
            <option key={data} value={data}>
              {data}
            </option>
          ))}
        </select>
      </div>
      <div className="text">
        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="1234 Main Street"
          onChange={handleData}
          value={getData.address}
        ></input>
      </div>
      <div className="text">
        <label>City</label>
        <input
          type="text"
          name="city"
          placeholder="Gurgaon"
          onChange={handleData}
          value={getData.city}
        ></input>
      </div>
      <div className="text">
        <label>State</label>
        <input
          type="text"
          name="state"
          placeholder="Haryana"
          onChange={handleData}
          value={getData.state}
        ></input>
      </div>
      <div className="text">
        <label>ZIP Code</label>
        <input
          type="text"
          name="postal"
          pattern="[0-9]*"
          placeholder="122010"
          onChange={handleData}
          value={getData.postal}
        ></input>
      </div>
      <div>
        {check.map((data) => {
          return (
            <div>
              <input
                id={data.text}
                type="checkbox"
                name="isVisible"
                checked={isClicked}
                onChange={handleData}
              ></input>
              <label htmlFor={data.text}>{data.text}</label>
            </div>
          );
        })}
      </div>
      <div>
        <div>
          <h3>Push Notifications</h3>
          <span>These are delivered via SMS to your mobile phone</span>
        </div>
        <div>
          {notifications.map((data) => {
            return (
              <>
                <input
                  type="radio"
                  name="notifications"
                  value={data}
                  onChange={handleData}
                />
                <span id="radio">{data}</span>
                <br></br>
              </>
            );
          })}
        </div>
        <div id="btn">
          <button onClick={handleForm}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
