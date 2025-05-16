import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Project_card1 = (props) => {
	return (
		<div className="md:w-3/4 md:h-80 flex md:flex-row flex-col border-0 rounded-lg shadow-2xl mx-5 md:mx-auto">
			<div className="left flex justify-center flex-col md:w-1/2 gap-3 p-6 md:p-10">
				<h2 className="text-2xl mx-auto text-black">{props.project_name}</h2>
				<p className="text-lg mx-auto text-wrap text-black">{props.project_description}</p>
				<Link href={`/projects/${props.project_name}`} className="mx-auto">
					<Button >View Project</Button>
				</Link>
			</div>
			<div className="right md:w-1/2 p-4 md:p-0">
				<Image
				loading="lazy"
					src={props.project_img}
					alt={`Screenshot of ${props.project_name} - ${props.project_description.substring(0, 50)}${props.project_description.length > 50 ? '...' : ''}`}
					height={250}
					width={300}
					className="w-full h-full rounded-lg object-cover"
				/>
			</div>
		</div>
	);
};

export default Project_card1;
