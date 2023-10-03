import React from "react";
import { Button } from "./button/button";
import arrow from "../assets/arrow-right.svg"
import bg from "../assets/bg.png"
import woman from '../assets/AdobeStock_400053098 1.png'
import Laptop from '../assets/AdobeStock_362497671 1.png'
import phone from '../assets/woman-using-smartphone-technology 2.png'
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="h-[100vh]">
      <div className="flex items-center px-16 py-20">
        <div className="flex flex-1 ">
          <div className="">
            <h1 className="text-[50px] text-secondary font-bold font-sora w-[400px]  leading-[56px] ">
              Show Them Don’t Just Tell
            </h1>
            <p className="text-[rgba(0, 0, 0, 0.75)] font-inter text-base w-[400px] mb-10 mt-5 ">
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
             <Link to="https://drive.google.com/drive/folders/1lyqwslKcwivL84vkaLo43nfycP8oHKJs?usp=drive_link">
            <Button variant="primary" imgSrc={arrow} imgAlt="google">
             Install HelpMeOut
            </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-1 h-[448px]">
  
          <div>
            <ul class="grid grid-cols-2 grid-rows-4 gap-8 grid-flow-row">
              
              <li class=" bg-primary ">
              <img className="w-[448px] h-[200px]" src={Laptop}/>
                
              </li>
              <li class="row-span-2 bg-primary relative ">
             
                <img className="w-[448px] h-[432px]" src={phone}/>
                <img className="absolute -top-[50px] -right-[46px] z-10" src={bg}/>
              </li>
              <li class=" bg-primary ">
                <img className="w-[448px] h-[200px]" src={woman}/>
              </li>
             
            </ul>
          </div>
        </div>
        
      </div>
   
    </div>
  );
}
export default Hero;
