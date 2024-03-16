import { useState } from 'react';
import Login from './components/Login.jsx'
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Booking from './components/Booking.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
const main_list = [{
  value1:"Non Veg Starter",value2:"Chicken Tandoori",value3:"0"
,},{
  value1:"Soup",value2:"Sweet Corn Soup",value3:"0"
},{
  value1:"Main Course",value2:"Chicken Biriyani",value3:"0"
},{
  value1:"Veg Starter",value2:"Paneer Manchurian",value3:"0"
},{
  value1:"Non Veg Starter",value2:"Chicken Wings",value3:"0"
},{
  value1:"Main Course",value2:"Chicken Noodles",value3:"0"
},{
  value1:"Soup",value2:"Tomato Soup",value3:"0"
},{
  value1:"Veg Starter",value2:"Paneer Manchurian",value3:"0"
},{
  value1:"Non Veg Starter",value2:"Mutton Chukka",value3:"0"
}]
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/dashboard" element={<Dashboard list = {main_list}/>}></Route>
        <Route path="/booking" element={<Booking b_list = {main_list}/>}></Route>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
