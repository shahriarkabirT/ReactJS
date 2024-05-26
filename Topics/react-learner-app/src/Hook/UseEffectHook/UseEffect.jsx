// useEffect(function, [dependencies])

// 1. useEffect(() => {}) Runs after every re-render
// 2. useEffect（（）=>｛｝，［］）Runs only on mount
// 3. useEffect(() => {}, [value]) // Runs on mount + when value changes

import React, {useEffect,useState} from "react";
function UseEffect(){

    const[count, setCount] = useState(0);

    function add(){
        setCount(c => c+1)
    }
    useEffect(()=>{
        document.title = `UseEffect`;
    },[])
    return(<>

            <p>count: {count}</p>
            <button onClick={add}>Add</button>
    
    </>



    );
}
export default UseEffect