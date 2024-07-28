import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

import Card from '../Card/Card.jsx';
import Parants from '../Props/Parants.jsx';
import Students from '../Props/Student.jsx';
import Greet from '../Conditional_Rendaring/Parant.jsx';
import List from '../Lists/App.jsx';
import ClickEvent from '../ClickEvent/App.jsx';
import OnChangeEvent from '../OnChangeEvent/onChange.jsx';
import ColorPicker from '../ColorPicker/colorPicker.jsx';
import Hook from '../Hook/App.jsx';
import ToDoApp from '../ToDoApp/ToDoApp.jsx';
import Clock from '../DigitalClock/clock.jsx';
import UseContext from '../Hook/UseContext/ComponentA.jsx';
import StopWatch from '../StopWatch/StopWatch.jsx'
import Routing from '../Router/App.jsx'
import UseContextExWithReducer from '../Hook/UseReducer/UseContextExWithReducer.jsx'
import UseReducerEx from '../Hook/UseReducer/app.jsx'
import GetPost from '../Hook/UseReducer/GetPost.jsx'

export const App = () => {
        const router = createBrowserRouter([
            {
                path:"/",
                element:<><NavBar/><Home></Home></>,
                
            },
            {
                path:"/About.jsx",
                element:<><NavBar/><About/></>,
                
            },
            {
                path:"/UseReducerEx.jsx",
                element:<><NavBar/><UseReducerEx/></>,
                
            },
            {
                path:"/Card.jsx",
                element:<><NavBar/><Card/></>,
                
            },
            {
                path:"/Clock.jsx",
                element:<><NavBar/><Clock/></>,
                
            },
            {
                path:"/Stopwatch.jsx",
                element:<><NavBar/><StopWatch/></>,
                
            },
            {
                path:"/UseContext.jsx",
                element:<><NavBar/><UseContext/></>,
                
            },
            {
                path:"/UseContextExWithReducer.jsx",
                element:<><NavBar/><UseContextExWithReducer/></>,
                
            },
            {
                path:"/GetPost.jsx",
                element:<><NavBar/><GetPost/></>,
                
            },
    
    
    
        ])

  return (
    <>
   
   <RouterProvider router = {router} />
   
   </>
  )
}

export default App
