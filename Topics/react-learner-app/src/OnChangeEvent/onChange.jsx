import React, {useState} from "react";

function onChange(){
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [phone, setPhone] = useState("");
    const [hobby, setHobby] = useState("");
    const updateName = (event)=>{
        setName(event.target.value)
    }
    const updateComment= (event)=>{
        setComment(event.target.value)
    }
    const selectPhone = (event) =>{
        setPhone(event.target.value);
    }
    const updateHobby = (event) =>{
        setHobby(event.target.value);
    }
    return(<div>
        <p>Name: {name}</p>
       
        <input value={name} onChange={(event)=>updateName(event)} type="text"/>
        <p>Comment: {comment}</p>
        <textarea value={comment} onChange={(event)=>updateComment(event)}></textarea>
        <p>Your Phone: {phone}</p>
        <select value={phone} onChange={(event)=>selectPhone(event)}>
            <option value="">Select a phone</option>
            <option value="Nokia">Nokia</option>
            <option value="Samsung">Samsung</option>
            <option value="Apple">Apple</option>
            <option value="Others">Others</option>
        </select>
        <p>You like: {hobby}</p>

        <label><input type="radio" value="Shopping"
                checked = {hobby==="Shopping"}
                onChange={(event)=>updateHobby(event)}/>
                Shopping
        </label>
        <label><input type="radio" value="Hang Out"
                checked = {hobby==="Hang Out"}
                onChange={(event)=>updateHobby(event)}/>
                Hang Out
        </label>
        <label><input type="radio" value="Playing Football"
                checked = {hobby==="Playing Football"}
                onChange={(event)=>updateHobby(event)}/>
                Playing Football
        </label>
    </div>);
}
export default onChange;