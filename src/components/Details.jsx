import React from "react";
import Logo from "../assets/logo.svg";
import Edit from "../assets/edit.svg";
import Copy from "../assets/copy.svg";
import Facebook from "../assets/Facebook.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Telegram from "../assets/telegram.svg";

const Details = () => {
  return (
    <>
      <div clsssName="mx-[100px]">
        <header className="flex items-center justify-between mx-[100px] my-[30px]">
          <div className="">
            <img src={Logo} alt="logo" />
          </div>

          <div className="text-base text-black font-semibold flex gap-4">
            <p>Features</p>
            <p>How It Works</p>
          </div>

          <button className="cursor-pointer text-[#120B48] text-base font-semibold">
            Get Started
          </button>
        </header>

        <section className="flex mx-[100px] mt-20">
          <div className="flex flex-col gap-10 w-[700px]">
            <div>
              <h1 className="font-bold text-5xl text-[#141414]">
                Your video is ready!
              </h1>
              <p>name</p>
            </div>

            <div className="flex items-center">
              <p>Untitled_Video_20232509</p>
              <img src={Edit} alt="edit-icon" />
            </div>

            <div className="rounded-lg flex bg-[#dcdcdf] p-4 w-[500px]">
              <input
                type="text"
                className="w-full p-2 outline-none bg-[#b6b3c620] placeholder-black"
                placeholder="Enter email of receiver"
              />
              <button className="px-4 bg-[#605C84] text-white rounded cursor-pointer">
                Send
              </button>
            </div>

            <div>
              <p>Video Url</p>
              <div className="rounded-lg border gap-4 flex items-center p-4 w-[500px]">
                <p>https://www.helpmeout/Untitled_Video_20232509</p>
                <button className="px-4 py-2 flex items-center gap-1 text-[#605C84] border-2 rounded cursor-pointer">
                  <img src={Copy} alt="" />
                  Copy
                </button>
              </div>
            </div>

            <div>
              <p>Share your video</p>
              <div className="flex items-center gap-4">
                <button className="rounded-lg border-2 px-4 flex py-3 gap-1">
                  <img src={Facebook} alt="" />
                  Facebook
                </button>
                <button className="rounded-lg border-2 px-4 flex py-3 gap-1">
                  <img src={Whatsapp} alt="" />
                  Whatsapp
                </button>
                <button className="rounded-lg border-2 px-4 flex py-3 gap-1">
                  <img src={Telegram} alt="" />
                  Telegram
                </button>
              </div>
            </div>
          </div>
          <div className="h-[600px] border border-y border-black mx-2"></div>
          <div>Video</div>
        </section>
      </div>
    </>
  );
};

export default Details;
