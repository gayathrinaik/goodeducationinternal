import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './components/home';
import ContactUs from './components/contactus';
import Workit from './components/workit';
import Portfolio from './components/portfolio';
import Tutorial from './components/tutorial';
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import Navbar from './components/navbar';
  


const App =()=> {
  return (
    <>
   <BrowserRouter>
   <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contactus" element={<ContactUs/>}></Route>
      <Route path="/workit" element={<Workit/>}></Route>
      <Route path="/portfolio"element={<Portfolio/>}></Route>
      <Route path="/tutorial"element={<Tutorial/>}></Route>
      
    </Routes>
   </BrowserRouter>
   </>
  )


}

export default App;
