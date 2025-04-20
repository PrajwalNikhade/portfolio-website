import React from "react";

const Main = () => {
	return (
		<div>
			<div
				className="main-header flex flex-row h-8
            ">
				<div
					className="header-left flex  items-center
                bg-[#F9FAFF] justify-around w-1/2 text-center">
					<p className="text-center text-black text-lg">Prajwal</p>
				</div>

				<div
					className="header-right flex flex-row items-center
             justify-around w-1/2 bg-[#FDC435] text-lg text-black ">
					<p>About</p>
					<p>Projects</p>
					<p>Contact</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
