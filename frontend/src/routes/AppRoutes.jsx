import React from 'react'
import {Route , BrowserRouter,Routes} from 'react-router-dom'
import Login from '../screen/login.jsx'
import Register from '../screen/register.jsx'
import Home from '../screen/home.jsx'
const AppRoutes = () => {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" exact element={<Home/>} />
     <Route path="/login" element={<Login/>} />
     <Route path="/register" element={<Register/>} />
    
   </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes
