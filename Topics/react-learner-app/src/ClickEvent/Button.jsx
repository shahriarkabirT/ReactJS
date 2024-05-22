import styles from './Click.module.css';
import React,{useState} from 'react';
function Button(){

    const [counter , setCount] = useState(1);
    const [message, setMessage] = useState("");
    let count = 0;
    const handleClick = (name)=> {
        count++;
        setCount(c => c+1);
        if(counter > 3){
            setMessage(`${name} don't click me more, You are an idiot`);
        }
        else if(counter > 2){
            setMessage(`${name} Get better or I'll scold you
            `)
        }
        else{
            setMessage(`${name} clicked me ${counter} times`);
        }
    }
    //single click event
    const handleSingleClick = (e)=>{ 
        e.target.textContent = "You single clicked me";       
        console.log(e.target.textContent);
        
    }
    //double click event and hide elements
    const handleDoubleClick = (e)=>{        
        console.log(e.target.textContent);
        e.target.textContent = "You double clicked me";  
    }
    
    
    return (<><center>
    <br></br>
    <button onClick={()=>handleClick("Shahriar")} >
        Don't Dare to Touch me 👺</button>
        <br></br>
        <br></br>
        {message}
        <br></br> <br></br>
<button onClick={(e)=>handleSingleClick(e)} 
onDoubleClick={(e)=>handleDoubleClick(e)}>
    Click me</button>
        
    </center></>);
}


export default Button;
