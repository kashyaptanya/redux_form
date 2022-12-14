import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginform from './components/Loginform';
import Home from './components/Home'
import { Provider } from "react-redux"
import store from '../src/store/Store'

function App  ()  {
  return (
    <Provider store={store}>
     <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Loginform/>} />
        <Route  path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter> 
    </Provider>
  )
}
export default App