import React from "react";
import Home from "./Pages/Home";
import Details from "./Pages/Details/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Pages/auth/Login";
import HowItWorks from "./components/HowItWorks";
import Feature from "./components/Feature";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Ready from "./components/Ready/Ready";

function App() { 
  return (
    
    
    <Router>
    <Header/>
    <Routes>
      <Route path="/" exact  element={<Home/>}/>
     {/*  <Route path="/send" exact  element={<Details/>}/> */}
      <Route path='/auth/login' element={<Login/>} />
      <Route path='/HowItWorks' element={<HowItWorks/>} />
      <Route path='/Feature' element={<Ready/>} />
    </Routes>
    <Footer />
   </Router>
   
  );
}

export default App;
