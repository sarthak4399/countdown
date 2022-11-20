import React from "react";
import FlipCountdown from "@rumess/react-flip-countdown";
import Bg from "../src/assets/video (1).mp4";
import "./App.css";
const App = () => {
  return (
    <div className=" z-10 mt-[20%] bg-blend-screen text-[#00df9a]">
      <video
        id="myVideo"
        src={Bg}
        type="video/mp4"
        className="object-cover"
      ></video>
      <FlipCountdown
        className="backdrop-blur-lg"
        dayTitle="Days "
        hourTitle="Hours"
        minuteTitle="Minutes"
        secondTitle="Seconds"
        endAt={"21 November 2022, 18:15:00"}
      />
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default App;
