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

    const handleSingleClick = (e)=>{ 
        e.target.textContent = "You single clicked me";       
        console.log(e.target.textContent);
        
    }
    const handleDoubleClick = (e)=>{ 
        e.target.textContent = "You Double clicked me";       
        console.log(e.target.textContent);
        
    }
    
    
    return (<button onClick={(e)=>handleSingleClick(e)} onDoubleClick={(e)=>handleDobuleClick(e)}>Click me</button>);
}


export default Button;
