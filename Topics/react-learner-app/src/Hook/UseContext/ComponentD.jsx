import styles from './Components.module.css'
import React, {useEffect,useState,useContext} from "react";
import { userContext } from './ComponentA.jsx';

function ComponentD(){

    const user = useContext(userContext);

    return(<>
        <div className={styles.comp}>

        <h2 >ComponentD</h2>
        <h5>{user} from D</h5>
        </div>
        
    </>


    );
}
export default ComponentD