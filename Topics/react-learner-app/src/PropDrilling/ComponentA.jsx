import styles from './Components.module.css'
import React, {useEffect,useState} from "react";
import ComponentB from './ComponentB';
function ComponentA(){
    const name = "Shahriar";
    return(<>
        <div className={styles.comp}>
        <h2>ComponentA</h2>
        <h5>{name} from D</h5>
        <ComponentB name={name}></ComponentB>
        </div>

    </>


    );
}
export default ComponentA