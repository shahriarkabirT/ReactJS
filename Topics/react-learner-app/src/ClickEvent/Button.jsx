import styles from './Click.module.css'
function Button(){
    let count = 0;
    const handleClick = (name)=> {
        count++;
        if(count > 5){
            console.log(`${name} don't click me more`);
        }
        else{
            console.log(`${name} clicked me ${count} times`);
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
        e.target.style.display = "none";
    }
    
    
    return (<button onClick={(e)=>handleSingleClick(e)} onDoubleClick={(e)=>handleDoubleClick(e)}>Click me</button>);
}


export default Button;
