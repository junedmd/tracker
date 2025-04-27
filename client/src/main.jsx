import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import Home from './compoents/Home/Home.jsx'
import Dashboard from './compoents/Dashboard/Dashboard.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>

      
    </Routes>
  </BrowserRouter>
)
