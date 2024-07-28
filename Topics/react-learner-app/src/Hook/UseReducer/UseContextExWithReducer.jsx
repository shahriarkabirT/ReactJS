import React, { useContext, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import Component_A from './Component_A';


export const counterContext = React.createContext();


const UseContextExWithReducer = () => {

const initialValue = 0;

const reducer = (state, action) => {
  switch (action) {
    case 'inc':
      return state + 1
    case 'dec':
      return state - 1
    default:
      throw new Error('Unknown action');
  }
};


  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <p>Count: {count}</p>

      <counterContext.Provider value={{countDispatch : dispatch}}>
        <Component_A/>
      </counterContext.Provider>
    </>
  );
}

export default UseContextExWithReducer;