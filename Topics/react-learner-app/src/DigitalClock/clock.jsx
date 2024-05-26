import React , {useState,useEffect} from "react";
import styles from './clock.module.css';
function Clock(){

    const [time , setDate] = useState(new Date());


    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date());
        },1000)
    },[])

    function formatTime(){
        let hours = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds();
        
        // const meridiem = hourse>=12 ? "PM" : "AM";
        if(hours>12) hours = hours % 12;
        return `${padZero(hours)}:${padZero(minute)}:${padZero(second)}`; 
    }

    function padZero(number){
        if(number < 10){
            return "0" + number;
        }
        else return number;
    }

    return(<>   
    <div className={styles.background}>
        <div className={styles.clock}>
            <span>{formatTime()}</span>  
        </div>
    
    </div>
    </>);
}

export default Clock