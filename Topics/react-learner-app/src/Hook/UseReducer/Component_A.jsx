import React, { useContext } from 'react'
import { counterContext } from './UseContextExWithReducer';
import Component_B from './Component_B'

const ComponentA = () => {
  return (
    <Component_B/>
  ) 
}

export default ComponentA