import React,{useState,useEffect,useRef} from "react";
import styles from './watch.module.css'

function StopWatch(){

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);
    var timer;
    useEffect(()=>{

        if(isRunning){
           intervalIdRef.current =  setInterval(()=>{
                setElapsedTime(Date.now() - startTimeRef.current);
            
          console.log("elapsed-Time: " + elapsedTime);

            },10);

          
        }
        return()=>{
            clearInterval(intervalIdRef.current);
        }
        

    },[isRunning])


    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }
    function stop(){
        setIsRunning(false);
    }
    function reset(){
        setElapsedTime(0);
        setIsRunning(false);
    }
    function format(){

        let hour = Math.floor(elapsedTime/(1000 * 60 * 60));
        let minute = Math.floor(elapsedTime/(1000*60)%60);
        let second = Math.floor(elapsedTime/(1000)%60);
        let milisecond = Math.floor( (elapsedTime % 1000) / 10);



        return `${padZero(minute)} : ${padZero(second)}: ${padZero(milisecond)}`;
    }
    function padZero(number){
        if(number < 10){
            return "0" + number;
        }
        else return number;
    }

    

function formatTime(){

}

    return(<>
            <div className={styles.wrap}>
            <p className={styles.display}>{format()}</p>
            <button className={styles.button}  onClick={start}>Start</button>
            <button className={styles.button} onClick={stop}>Pause</button>
            <button className={styles.button} onClick={reset}>Reset</button>
            </div>
     
           
            
    </>)
}
export default StopWatch



