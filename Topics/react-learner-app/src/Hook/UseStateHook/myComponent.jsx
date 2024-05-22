import React, {useState} from "react";

function myComponent(){
    const [name, setName] = useState("Shahriar");
    const [age, setAge] = useState(23);
    const [maritalStatus, setIsMarried] = useState(false);

    const updateName = (value)=>{
            setName(value);
    }

    const increamentAge = ()=>{
            setAge(age+1);
    }
    const decreamentAge = ()=>{
        setAge(age-1);
    }

    const toggle = ()=>{
        setIsMarried(!maritalStatus);
    }
    return(<div>

        <p>Name: {name}</p> 
        {<button onClick={()=>updateName("Towfique")}>Change Name</button>}
        <p>Age: {age}</p> 
        {<button onClick={()=>increamentAge()}>Increament Age</button>}
        {<button onClick={()=>decreamentAge()}>Decreament Age</button>}
        <p>Is he married: {maritalStatus ? "Yes":"No"}</p> 
        {<button onClick={()=>toggle()}>Change Status</button>}
    </div>);
}
export default myComponent;