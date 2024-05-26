import styles from './Components.module.css'
import React, {useEffect,useState} from "react";

function ComponentD(props){

    return(<>
        <div className={styles.comp}>

        <h2 >ComponentD</h2>
        <h5>{props.user} from D</h5>
        </div>
        
    </>


    );
}
export default ComponentD