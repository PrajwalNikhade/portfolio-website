import React from "react";
import Button from "./Button";

const AboutMain = () => {
  return (
    <div className="main_about flex  ">
      <div className="left w-2/3">
        <h1 className="font-bold text-2xl mx-20 my-5">About Me </h1>
        <p className="text-wrap  mx-20 ">
          I am a Full Stack Web Developer .I build full stack web apps using the
          MERN stack and Next.js. From designing responsive front-ends to
          setting up solid back-end APIs, I enjoy turning2 ideas into real,
          working products. I'm always learning new tools, writing clean code,
          and looking for ways to make the web faster and better. Take a look
          around and feel free to reach out!
        </p>
        <a href="/files/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >

        <Button className="mx-20 mt-4">Resume</Button>
        </a>
      </div>
      <div className="right w-1/3 ">
        <div className="circle rounded-full bg-[#fdc435] h-64 w-64 m-5 flex items-center justify-center">

          {/* <span className="text-white font-bold">Your Photo</span> */}
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
