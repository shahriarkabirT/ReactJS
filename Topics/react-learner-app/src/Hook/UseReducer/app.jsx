import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'inc':
      return {
        count: state.count + action.value
      };
    case 'dec':
      return {
        count: state.count - action.value
      };
    default:
      throw new Error('Unknown action');
  }
};

const App = () => {
  const [userValue, setUserValue] = useState(0);

  const initialValue = {
    count: 0,
  };

  const handleInput = (event) => {
    setUserValue(parseInt(event.target.value, 10));
  };

  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <p>Count: {state.count} -/+ {userValue}</p>
      <input 
        type="number" 
        id='userInput' 
        onChange={handleInput} 
        value={userValue} 
      />
      <button onClick={() => dispatch({ type: 'inc', value: 1 })}>Increase by one</button>
      <button onClick={() => dispatch({ type: 'inc', value: userValue })}>Increase by {userValue}</button>
      <button onClick={() => dispatch({ type: 'dec', value: 1 })}>Decrease by one</button>

    </>
  );
}

export default App;