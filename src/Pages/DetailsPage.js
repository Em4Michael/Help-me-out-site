import React from "react";
import Edit from "../assets/edit.svg";
import Copy from "../assets/copy.svg";
import Facebook from "../assets/Facebook.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Telegram from "../assets/telegram.svg";
import Navbar from "../components/Navbar";

const DetailsPage = () => {
  return (
    <>
      <div className="">
        <section className="flex px-16 mt-20">
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

            {/* <div>
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
          <div
            className="Frame1000002512 w-[598px] h-[876px] relative bg-gray-100 rounded-3xl"
            style={{
              width: '400px',
              height: '700px',
              position: 'absolute',
              background: '#F2F4F7',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              margin: 'auto'
            }}
          >
            <div
              className="CloseCircle w-10 h-10 left-[494px] top-[64px] absolute"
              style={{
                width: '40px',
                height: '40px',
                left: '494px',
                top: '64px',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'inline-flex'
              }}
            >
              <div
                className="CloseCircle w-10 h-10 left-0 top-0 absolute"
                style={{
                  width: '40px',
                  height: '40px',
                  position: 'relative'
                }}
              ></div>
            </div>
            <div
              className="Frame1000002526 w-[348px] left-[125px] top-[56px] absolute flex-col justify-start items-center gap-10 inline-flex"
              style={{
                width: '348px',
                left: '125px',
                top: '56px',
                position: 'absolute',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: '40px',
                display: 'inline-flex'
              }}
            >
              <img
                className="SuccessKite1 w-[318px] h-[286px]"
                src="https://via.placeholder.com/318x286"
                alt="video"
                style={{
                  width: '318px',
                  height: '286px'
                }}
              />
              <div
                className="YourVideoLinkHasBeenSentToJohnmarkGmailCom w-[348px] text-center"
                style={{
                  width: '348px',
                  textAlign: 'center'
                }}
              >
                <span style={{ color: '#08051E', fontSize: '24px', fontFamily: 'Work Sans', fontWeight: '400', wordWrap: 'break-word' }}>
                  Your video link has been sent to
                </span>
                <span style={{ color: '#120B48', fontSize: '24px', fontFamily: 'Work Sans', fontWeight: '500', wordWrap: 'break-word' }}>
                  johnmark@gmail.com
                </span>
              </div>
            </div>
 */}
           </div>
        </section>
      </div>
    </>
  );
};

export default DetailsPage;
