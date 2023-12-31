import React from "react";
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg";
import AuthProfileMenu from "./../AuthProfileMenu";
import Authbutton from "./../Authbutton";
function Header() {
  const isAuthenticated = false;
  const isAuthbutton = false;
  return (
    
   

    <div>
      <div className="py-2 flex justify-between w-[100%] items-center h-[84px] px-16 ">
      <Link to="/" >    <div className=" flex gap-2 items-center">
          <img src={logo} alt="logo" />
          <h4 className="font-bold text-base text-primary  font-inter">
            HelpMeOut
          </h4>
        </div></Link> 

        <AuthProfileMenu isAuthenticated={isAuthenticated} />
        <Authbutton isAuthbutton={isAuthbutton} />
      </div>
    </div>
  );
}

export default Header;
