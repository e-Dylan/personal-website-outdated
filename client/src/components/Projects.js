import React from "react";

import '../components-styles/Projects.scss';

import ProjectCard from '../components/ProjectCard';

import waygoThumbnail from '../resources/project_thumbnails/waygo-thumbnail.png';
import speednetThumbnail from '../resources/project_thumbnails/speed-net-thumbnail.png';
import weatherAppThumbnail from '../resources/project_thumbnails/weather-app-thumbnail.png';

import projects from '../projects';


function Projects(props) {
	return (
		<div className="container-center">
			<div className="section-title">
				<a>PROJECTS</a>
				<div className="section-title-underline"></div>
			</div>

			<div className="projects-container">
			
				{ Object.keys(projects).map((key, index) => {
					return (
						<ProjectCard
							className="project-card"
							href="/projects"
							image={projects[key].image}
							title={projects[key].title}
							category={projects[key].category} 
							description={projects[key].description}
						/>
					);
				}) }
				
			</div>

			<div className="projects-buttons centerX">
				<a className="a-button" href="/projects">
					<button className="button-dark">View All Projects</button>
				</a>
				<a className="a-button" href="https://github.com/e-Dylan">
					<button className="button-dark">Github</button>
				</a>
			</div>
		
		</div>
	)
}

export default Projects;