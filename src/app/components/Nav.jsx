import React from "react";
import Link from "next/link";

const Nav = () => {
	return (
		<>
			<div
				className="main-header flex md:flex-row flex-col h-full
            ">
				<div
					className="header-left flex  items-center
                bg-[#F9FAFF] justify-around md:w-1/2 w-full text-center">
					<Link href="/" className="text-center text-black text-lg">Prajwal Nikhade</Link>
				</div>

				<div
					className="header-right flex flex-row items-center
             justify-around md:w-1/2 w-full bg-[#FDC435] text-lg text-black ">
					<Link href="/about">About</Link>
					<Link href="/projects">Projects</Link>
					<Link href="/contact">Contact</Link>
				</div>
			</div>
		</>
	);
};

export default Nav;
