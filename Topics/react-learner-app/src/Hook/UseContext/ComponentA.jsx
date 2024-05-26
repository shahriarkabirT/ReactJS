//useContext) = React Hook that allows you to share values
//between multiple levels of components
//without passing props through each level

//PROVIDER COMPONENT
// 1.import {createContext} from 'react'

//2. export const MyContext = createContext;
//3. ‹MyContext.Provider value={value}>
//< Child /›
//‹/MyContext. Provider ›

// CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react';
//import { MyContext } from '•/ComponentA';
// 2. const value = useContext (MyContext) ;

import styles from './Components.module.css'
import React, {useEffect,useState,createContext} from "react";
import ComponentB from './ComponentB';

export const userContext = createContext();

function ComponentA(){
    const name = "Shahriar";
    return(<>
        <div className={styles.comp}>
        <h2>ComponentA</h2>
        <userContext.Provider value={name}>
        <ComponentB></ComponentB>
        </userContext.Provider>
        </div>

    </>


    );
}
export default ComponentA