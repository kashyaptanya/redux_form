import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginform from './components/Loginform';
import Home from './components/Home'

function App  ()  {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Loginform/>} />
        <Route  path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter> 
    </>
  )
}
export default App