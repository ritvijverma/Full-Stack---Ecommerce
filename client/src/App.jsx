import React from 'react'
import {Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import Contact from "./pages/Contact"
import PageNotFound from "./pages/PageNotFound"
import About from "./pages/About"
import Policy from './pages/Policy'
import Register from './Auth/Register'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Auth/Login'



const App = () => {
  return (
    <>
  <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element= {<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/policy' element={<Policy/>}/>
    <Route path='*' element={<PageNotFound/>}/>
  </Routes>
    <ToastContainer/>

   

    </>
  )
}

export default App