import {useEffect,useReducer} from 'react';
const initialState = {
    loading : true,
    error: "",
    data: "",
}
const reducer = (state,action) => {
    switch(action.type){
        case "SUCCESS": 
            return{
                loading: false,
                data: action.result,
                error:"",
            }
        case "FAILED":
            return{
                loading : false,
                data : "",
                error:" there was an error"
            }
        default:
             return state
    }
}
const GetPost = () => {
    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response)=> response.json())
        .then((data)=>{
            dispatch({type:"SUCCESS",result:data})
        })
        .catch(()=>{
            dispatch({type:"FAILED"})
        })
    },[]);
  return (
    <>
    {state.loading? "Loading..." : state.data.title}
    {state.error? state.error : ""}
    </>
  )
}

export default GetPost