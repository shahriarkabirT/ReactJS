import React, { useState } from "react";
import codesrc from '../../assets/updateObject.png'
function UpdateStateOfObject() {
  const [information, setInfo] = useState({
    name: "name",
    age: 25,
  });

  const updateName = (event) => {
    setInfo((i) => ({ ...i, name: event.target.value }));
  };
  const updateAge = (e) => {
    setInfo((i) => ({ ...i, age: e.target.value }));
  };
const styles = {
        height: " 500px",
        width: "auto",
        marginTop: "20px",
}   
const wrapper = {
    display : "flex",
    flexDirection : "column",
    alignItems : "center",
}
  return (
    <div style = {wrapper}>
        <h2>Example of State of Object</h2>
      <p>
        You Name is: {information.name}. You are {information.age} years old.
      </p>
      <input type="text" value={information.name} onChange={updateName} />
      <input type="number" value={information.age} onChange={updateAge} />
      <br />
      <br />

    </div>
  );
}
export default UpdateStateOfObject;
