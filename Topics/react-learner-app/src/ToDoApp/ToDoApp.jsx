import React, {useState} from "react";
import styles from './ToDoApp.module.css';
function ToDoApp(){
    const [taskName, setTask] = useState(["Working with To do","Js Routing"]);
    
    
    
    const handleAdd = ()=>{
        const newtask = document.getElementById("task").value;
        if(newtask!="") setTask(t => [...t,newtask]);
        document.getElementById("task").value = "";
       
    }   
    
    const handleDelete = (index) =>{
        setTask(taskName.filter((_,i) => i !== index));

    }

    const handleUp = (index) =>{
        if(index>0){
        const updatedTask = [...taskName];
        [updatedTask[index],updatedTask[index-1]] = [updatedTask[index-1],updatedTask[index]];
        setTask(updatedTask);
        }
    }
    const handleDown = (index) =>{
        if(index < taskName.length - 1 ){
            const updatedTask = [...taskName];
            [updatedTask[index],updatedTask[index+1]] = [updatedTask[index+1],updatedTask[index]];
            setTask(updatedTask);
            }
    }
    const keypress = ()=>{
        document.getElementById("task").addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default action (if any) for Enter key
            handleAdd(); // Call the function
        }
    });
}
    
    
    
    return(
        <div className="Wrapper">
        <h2>To Do App</h2>

        <p>Add task:</p>
        <input className={styles.input} onChange={keypress} id="task" type="text" /> 
        <p><button className={styles.addButton} onClick={handleAdd}>Add</button></p>
        


    <ol className={styles.ol}>
        {taskName.map((task,index) => <li className={styles.li} key={index}> <span className={styles.text}>{task}</span> 
        <button className={styles.deleteButton} onClick={()=>
        handleDelete(index)}>delete
        </button>
        <button className={styles.arrowButton} onClick={()=>
        handleUp(index)}>⬆
        </button>
        <button className={styles.arrowButton} onClick={()=>
        handleDown(index)}>⬇
        </button>
        
        
        </li>
       )}
</ol>
   



</div>);
    
   

}
export default ToDoApp