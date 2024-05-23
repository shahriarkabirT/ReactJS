import React, { useState } from "react";

function UpdateArrayOfObject() {

  const [Cars, setInfo] = useState([]);
  const [name, setName] = useState();
  const [date, setDate] = useState(new Date().getFullYear());
  const [color, setColor] = useState("");

    const handleAddCar = (e)=>{
        const info = {
                names : name,
                dates : date,
                colors : color
        }
        setInfo( C => [...Cars,info]);
        console.log(Cars);
    }
    const handleYearChange = (e)=>{
        setDate(e.target.value);
        console.log(date);
    }
    const handleNameChange = (e)=>{
        setName(e.target.value);
        console.log(name);
    }
    const handleColorChange = (e)=>{
        setColor(e.target.value);
        console.log(color);
    }
    const handleRemove = (index)=>{
        setInfo(C => Cars.filter((car,i) => i !=index));
    }

  return (
    <div>
        <h2>Update Array of Objects Example:</h2>

        <p>

        {Cars.map((car,index)=><li onClick={()=>handleRemove(index)} key={index}> Car Name: {car.names} <br /> Release Year: {car.dates} <br /> {car.colors} </li>)}
        </p>
        <input onChange={handleNameChange} placeholder="Car Name" type="text" />
        <br/>
        <input value={date} onChange={handleYearChange}type="number" />
        <br/>
        <input onChange={handleColorChange} placeholder="color"type="text" /><br />
        <button id="addCar" onClick={handleAddCar}>Add Car</button>

</div>
  );
}
export default UpdateArrayOfObject;
