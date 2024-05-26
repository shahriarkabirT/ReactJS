import styles from './Components.module.css'
import React, {useEffect,useState} from "react";
import ComponentD from './ComponentD';
function ComponentC(){

    return(<>
        <div className={styles.comp}>
        <h2 >ComponentC</h2>     
        <ComponentD></ComponentD>
        </div>
    </>


    );
}
export default ComponentC