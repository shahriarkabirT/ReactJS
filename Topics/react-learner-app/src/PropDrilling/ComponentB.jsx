import styles from './Components.module.css'
import React, {useEffect,useState} from "react";
import ComponentC from './ComponentC';
function ComponentB(props){

    const [names , setName] = useState("");

    useEffect(()=>{
        setName(props.name);
        console.log(props.name);
    },[])
    
    return(<>
        <div className={styles.comp}>
        <h2>ComponentB</h2>
        <h5>{names} from B</h5>
        <ComponentC user = {names}></ComponentC>
        </div>
    </>


    );
}
export default ComponentB