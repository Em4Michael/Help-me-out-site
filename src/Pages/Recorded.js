import React from "react";
import logo from "../assets/logo.svg";
import AuthProfileMenu from "../components/AuthProfileMenu";
import Authbutton from "../components/Authbutton";
import video from "../assets/video.png"

function Recorded() {
 
  return (
    <div>
      
      <div className="px-16">
        {" "}
        <h4 className="font-sora text-secondary text-[28px] font-bold">
          Hello, John Mark
        </h4>
        <h6 className="font-workSans text-secondary">
          Here are your recorded videos
        </h6>
      </div>
      <div className="flex md:flex-row  flex-col">
        <div className="flex flex-col flex-1 justify-center items-start ">
          <img src={video} />
        </div>
        <div className="flex flex-col flex-1 justify-center items-start ">
          <img src={video} />
        </div>
      </div>
    </div>
  );
}

export default Recorded;
