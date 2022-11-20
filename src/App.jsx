import React from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import Bg from "../src/assets/video.mp4";
import { AiFillPlayCircle } from "react-icons/ai";
import "./App.css";
const App = () => {
  return (
    <div className=" z-1 mt-[20%] bg-blend-screen text-[rgb(198,255,189)]">
      <div className="w-20 mt-[-10rem] justify-items-center  ml-40 absolute z-20">
        <h1 className="  text-3xl font-bold text-[rgb(198,255,189)]">RNXG</h1>
      </div>
      <video
        id="myVideo"
        src={Bg}
        type="video/mp4"
        className="object-cover"
        autoPlay
        loop
      >
        /
      </video>{" "}
      <FlipCountdown
        className="backdrop-blur-lg"
        dayTitle="Days "
        hourTitle="Hours"
        minuteTitle="Minutes"
        secondTitle="Seconds"
        endAt={"21 November 2022, 18:15:00"}
      />
      <div className=" ml-[45%] py-10 ">
        <button
          type="button"
          class="inline-block px-6 py-2 border-2 group border-[rgb(198,255,189)] text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out absolute md:ml-[40]"
          href="https://youtu.be/MAadWJdVLpk"
        >
          <a
            href="https://youtu.be/MAadWJdVLpk"
            target="_blank"
            className=" group text-white text-sm "
          >
            TEASER
          </a>
          <span className=" group">
            <AiFillPlayCircle className=" inline ml-1 text-center " size={20} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default App;
