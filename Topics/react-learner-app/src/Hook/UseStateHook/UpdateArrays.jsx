import React, { useState } from "react";

function UpdateArrays() {
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

  const [information, setInfo] = useState(["Apple","Banana"]);

//   const updateName = (event) => {
//     setInfo((i) => ({ ...i, name: event.target.value }));
//   };
//   const updateAge = (e) => {
//     setInfo((i) => ({ ...i, age: e.target.value }));
//   };
function addfood(){
    const foodname = document.getElementById("foodinput").value;

    setInfo([...information,foodname]);
}
function removefood(index){
   setInfo( information.filter((element,i)=> i !== index));

}


  return (
    <div>
        <h2>Update Array Example:</h2>
    <ul> {information.map((food,index) =>
         <li onClick={()=>removefood(index)} key={index}>{food}</li>)} </ul>
      <input type="text" id = "foodinput" placeholder="Enter a food name"/>
      <button onClick={addfood}>Add foods</button>

      
</div>
  );
}
export default UpdateArrays;
