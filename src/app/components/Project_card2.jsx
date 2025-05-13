import React from "react";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";

const Project_card1 = (props) => {
	return (
		<div className="mx-5 md:w-3/4 h-80 flex md:flex-row flex-col border-0 rounded-4xl shadow-2xl md:mx-auto">
			<div className="left md:w-1/2">
			<Image
					src={props.project_img}
					alt={`project image ${props.project_name}`}
					height={250}
					width={300}
					className="w-full h-full rounded-4xl"
					/>
			</div>
            <div className="right flex justify-center items-center my-4 py-10 flex-col md:w-1/2 gap-3">
				<h2 className="text-2xl mx-auto">{props.project_name}</h2>
				<p className="text-lg mx-auto text-wrap">{props.project_description}</p>
				<Link href={`/projects/${props.project_name}`}>
					<Button className="mx-auto">View Project</Button>
				</Link>
			</div>
		</div>
	);
};

const Project_card2 = (props) => {
	return (
		<div className="mx-5 md:w-3/4 md:h-80 flex md:flex-row flex-col border-0 rounded-4xl shadow-2xl md:mx-auto my-10">
			<div className="left md:w-1/2">
			<Image
					src={props.project_img}
					alt={`project image ${props.project_name}`}
					height={250}
					width={300}
					className="w-full h-full rounded-4xl"
					/>
			</div>
            <div className="right flex justify-center items-center my-4 py-10 flex-col md:w-1/2 gap-3">
				<h2 className="text-2xl mx-auto">{props.project_name}</h2>
				<p className="text-lg mx-auto text-wrap">{props.project_description}</p>
				<Link href={`/projects/${props.project_name}`}>
					<Button className="mx-auto">View Project</Button>
				</Link>
			</div>
		</div>
	);
};

export default Project_card2;
