import React from "react";

const Main = () => {
	return (
		<div className="main  flex flex-row">
			<div className="left flex  flex-col  w-1/2 bg-[#F9FAFF] text-black">
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
					<div className="buttons">
						<button className="border-2 hover:border-0 rounded-2xl p-3 my-4 mr-10  hover:bg-[#FDC435] hover:decoration-1 hover:decoration-black">
							Linkedin
						</button>
						<button className="border-2 hover:border-0 rounded-2xl p-3 my-4 mr-10 hover:bg-[#FDC435] hover:decoration-1 hover:decoration-black">
							Github
						</button>
					</div>
				</div>
			</div>
			<div className="right bg-[#FDC435] w-1/2">wrfr</div>
		</div>
	);
};

export default Main;
