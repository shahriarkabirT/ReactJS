import styles from './Components.module.css'
import React, {useEffect,useState} from "react";
import ComponentD from './ComponentD';
function ComponentC(props){

    return(<>
        <div className={styles.comp}>
        <h2 >ComponentC</h2>
        <h5>{props.user} from C</h5>
        <ComponentD user ={props.user}></ComponentD>
        </div>
    </>


    );
}
export default ComponentC