import React from "react";
import Home from "./Pages/Home";
import Details from "./components/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Pages/auth/Login";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact  element={<Home/>}/>
      <Route path="/send" exact  element={<Details/>}/>
      <Route path='/auth/login' element={<Login/>} />
   
    </Routes>
   </Router>
  );
}

export default App;
