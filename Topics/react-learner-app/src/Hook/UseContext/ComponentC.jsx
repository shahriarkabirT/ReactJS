import styles from './Components.module.css'
import React, {useEffect,useState,useContext} from "react";
import ComponentD from './ComponentD';
import { userContext } from './ComponentA.jsx';

function ComponentC(){
    const user = useContext(userContext);
    return(<>
        <div className={styles.comp}>
        <h2 >ComponentC</h2>
        <h5>{user} from C</h5>    
        <ComponentD></ComponentD>
        </div>
    </>


    );
}
export default ComponentC