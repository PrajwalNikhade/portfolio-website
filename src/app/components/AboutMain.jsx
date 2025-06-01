"use client";
import React from "react";
import Button from "./Button";

import { motion } from "framer-motion";

const AboutMain = () => {
  return (
    <div className="main_about flex flex-col md:flex-row  ">
      <motion.div
        className="left md:w-2/3 w-full"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-bold  md:mx-20 mx-30 my-2 md:my-5  underline decoration-[#FDC435] text-2xl ">About Me </h1>
        <p className="text-wrap m-3 md:mx-20 ">
          I am a Full Stack Web Developer .I build full stack web apps using the
          MERN stack and Next.js. From designing responsive front-ends to
          setting up solid back-end APIs, I enjoy turning to ideas into real,
          working products. I'm always learning new tools, writing clean code,
          and looking for ways to make the web faster and better. Take a look
          around and feel free to reach out!
        </p>
        <a href="/files/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
         
        >

        <Button className="md:mx-20 mx-6 md:mt-4" >Resume</Button>
        </a>
      </motion.div>
      <motion.div
        className="right w-1/3 "
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="circle rounded-full bg-[#fdc435] h-64 w-64 md:m-5 mx-12 my-3 flex items-center justify-center">

          {/* <span className="text-white font-bold">Your Photo</span> */}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMain;
