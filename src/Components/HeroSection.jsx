import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function HeroSection() {
  return (
    <div className="flex flex-col mt-6 lg:mt-20 items-center">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Virtaul IR build tool{" "}
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text ">
          for developers
        </span>
      </h1>
      <p className="max-w-4xl mt-10 text-center text-neutral-500 text-lg  ">
        Empower Your Creativity and build your VR app ideas to life with our
        intuitive development tools. Get started today and turn you imagination
        into immersive reality
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 mx-3 rounded-md px-4 py-2"
        >
         
          Start For Free
        </a>
        <a href="#" className=" mx-3 rounded-md px-4 py-2 border">
         
         Documentation
        </a>
      </div>
      <div className="flex justify-center mt-10">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4"/>
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4"
        >
         <source src={video2} type="video/mp4"/>
        </video>
      </div>
    </div>
  );
}

export default HeroSection;
