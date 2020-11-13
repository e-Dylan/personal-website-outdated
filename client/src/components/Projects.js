import React, { useState } from "react";

import { ProjectContext } from '../contexts/ProjectContext';

import '../components-styles/Projects.scss';
import '../components-styles/ProjectDisplay.scss';

import ProjectCard from '../components/ProjectCard';
import ProjectDisplay from '../components/ProjectDisplay';

import projects from '../projects';

function Projects(props) {
	const [value, setValue] = useState('one');

	return (
		<div className="container-center">
			<div className="section-title">
				<div data-aos="zoom-in-right" data-aos-duration="600">PROJECTS</div>
				<div className="section-title-underline" data-aos="zoom-in-right" data-aos-duration="600" data-aos-delay="200"></div>
			</div>

						
			{/* Global project-display window */}
			<ProjectContext.Provider value={ {value, setValue} }>
				<div className="project-display-window">
					<ProjectDisplay />
				</div>

				<div className="projects-container">
				
					{ Object.keys(projects).map((key, index) => {
						return (
							<ProjectCard
								className="project-card"
								href="/projects"
								project={projects[key]}
							/>
						);
					}) }
					
				</div>
			</ProjectContext.Provider>

			<div className="projects-buttons centerX">
				<a className="a-button" data-aos="fade-right" href="/projects">
					<button className="button-dark">View All Projects</button>
				</a>
				<a className="a-button" data-aos="fade-left" href="https://github.com/e-Dylan">
					<button className="button-dark">Github</button>
				</a>
			</div>
		
		</div>
	)
}

export default Projects;