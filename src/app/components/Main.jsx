import React from "react";
import Link from "next/link";
import Button from "./Button";
const Main = () => {
	return (
		<div className="main  flex md:flex-row flex-col md:gap-0 gap-2">
			<div className="left flex  flex-col  w-full md:w-1/2 bg-[#F9FAFF] text-black">
				<div className="m-auto w-2/3">
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
							<Link href="https://linkedin.com" target="_blank" >
							Linkedin
						</Link>
						</Button>
						<Button>
						<Link href="https://github.com" target="_blank" >
							Github
						</Link>
						</Button>
					</div>
				</div>
		
			</div>
			<div className="right bg-[#FDC435] md:w-1/2 w-full ">wrfr</div>
		</div>
	);
};

export default Main;
