import React,{useContext} from 'react';
import { counterContext } from './UseContextExWithReducer';


const Component_B = () => {
  const countContext = useContext(counterContext);
  return (
    <>
    
    <button type="button" onClick={()=> countContext.countDispatch('inc')}> Increment </button>
    <button type="button" onClick={()=> countContext.countDispatch('dec' )}> Decrement </button>
</>
  )}

export default Component_B