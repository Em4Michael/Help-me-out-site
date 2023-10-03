import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="py-2 flex justify-between items-center h-[84px] px-16 ">
        <div className=" flex gap-2 items-center">
          <img src={logo} alt="logo" />
          <h4 className="font-bold text-base text-primary  font-inter">
            HelpMeOuts
          </h4>
        </div>
        <nav>
          <ul className="flex gap-7 font-workSans font-semibold text-base">
          <Link to="/send" > <li>Features</li> </Link> 
          <Link to="/HowItWorks" ><li>How It Works</li></Link>  
          </ul>
        </nav>
        <div>
        <Link to="/auth/login" >  <button className="font-sora text-bas text-primary">
            Get Started
          </button>  </Link> 
        </div>
      </div>
    </div>
  );
}

export default Navbar;
