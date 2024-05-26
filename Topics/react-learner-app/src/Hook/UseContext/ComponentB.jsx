import styles from './Components.module.css'
import React, {useEffect,useState} from "react";
import ComponentC from './ComponentC';

function ComponentB(){

    
    return(<>

        <div className={styles.comp}>
        <h2>ComponentB</h2>
        <ComponentC></ComponentC>

        </div>
    </>


    );
}
export default ComponentB