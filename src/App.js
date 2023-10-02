import React from "react";
import Home from "./Pages/Home";
import Details from "./Pages/Details/Details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" exact  element={<Home/>}/>
      <Route path="/send" exact  element={<Details/>}/>
   
    </Routes>
   </Router>
  );
}

export default App;
