"use client"
import React from "react";
import Link from "next/link";
import Button from "./Button";
import { motion } from "framer-motion";
import Image from "next/image";
const Main = () => {
	return (
		<div className="main  flex md:flex-row flex-col md:gap-0 gap-2">
			<div className="left flex  flex-col  w-full md:w-1/2 bg-[#F9FAFF] text-black">
				<motion.div className="m-auto w-2/3" initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5}}>
					<h1 className="text-3xl font-bold flex my-10 ">
						Hello my name is
						<br className="m-1" />
						Prajwal Nikhade
					</h1>
					<p className="about text-wrap text-lg">
						I am a Full Stack Web Developer with knowledge in MERN Stack and
						Next.js
					</p>
					<div className="gap-2 flex">
						<Button>
							<Link href="https://linkedin.com/in/prajwalnikhade" target="_blank" rel="noopener noreferrer">
							Linkedin
						</Link>
						</Button>
						<Button>
						<Link href="https://github.com/PrajwalNikhade" target="_blank" rel="noopener noreferrer">
							Github
						</Link>
						</Button>
					</div>
				</motion.div>
		
			</div>
			<div className="right bg-[#FDC435] md:w-1/2 w-full ">
			<motion.div  initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.5,delay:0.2}}>

			<Image src={"/vercel.svg"} width={100} height={100} alt="vercel" priority />
			</motion.div>
			</div>
		</div>
	);
};

export default Main;
