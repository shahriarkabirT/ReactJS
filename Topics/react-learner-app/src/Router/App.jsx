import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './NavBar'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'

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
                path:"Contact.jsx/",
                element:<><NavBar/><Contact/></>,
                
            },
            {
                path:"/Home.jsx",
                element:<><NavBar/><Home></Home></>,
                
            },
    
    
        ])

  return (
    <>
   
   <RouterProvider router = {router} />
   </>
  )
}

export default App
