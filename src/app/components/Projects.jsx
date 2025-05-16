import React from "react";
import Project_card1 from "./Project_card1";
import Project_card2 from "./Project_card2";

const Projects = () => {
	return (
		<div className="flex flex-col gap-8 mb-16">
			<h1 className="flex justify-center text-4xl my-5 font-bold underline decoration-[#FDC435] mx-auto ">Projects</h1>
			<Project_card1
				project_name="project1"
				project_description="project description here "
				project_img="/Rectangle 7.png"
			/>
			<div className="mb-8"></div> {/* Spacer between cards */}
			<Project_card2
				project_name="project2"
				project_description="project description here "
				project_img="/Rectangle 7.png"
			/>
		</div>
	);
};

export default Projects;
