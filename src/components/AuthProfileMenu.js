import React, { useState } from "react";
import { Link } from 'react-router-dom'

function AuthProfileMenu({ isAuthenticated }) {
  return (
    <div>
      {isAuthenticated ? (
        <div></div>
      ) : (
       <div className="flex justify-between w-[100%]">
         <div >
          {" "}
          <nav>
            <ul className="flex gap-7 font-workSans font-semibold text-base">
            <Link to="/Feature" >  <li>Features</li></Link> 
            <Link to="HowItWorks" >    <li>How It Works</li></Link> 
            </ul>
            
          </nav>
        
        </div>
 
       </div>
      )}
    </div>
  );
}

export default AuthProfileMenu;
