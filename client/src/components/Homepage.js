import React from "react";

import '../components-styles/Homepage.scss';

import ProjectCard from './ProjectCard';

import waygoThumbnail from '../resources/project_thumbnails/waygo-thumbnail.png';
import speednetThumbnail from '../resources/project_thumbnails/speed-net-thumbnail.png';
import weatherAppThumbnail from '../resources/project_thumbnails/weather-app-thumbnail.png';

import projects from '../projects';

function Homepage(props) {

	return (
		<div className="homepage">
			<section className="landing-image-section">
				<div className="parallax-image full-screen">
					<div className="image-section-container center">
						<h1 className="image-header">Dylan Smith</h1>
						<br />
						<h3 className="image-info">Software and electrical engineering projects through research & development.</h3>
					</div>
				</div>
			</section>

			<section className="my-work-section">

				<div className="container-center">

					<div className="my-work-title">
						<a>My Work</a>
					</div>
					<div className="my-work-description">
						<a>
							My curiosity and eagerness fuels my motivation to build with software and engineering.
							From designing artifical intelligence models to building electric skateboards, my passion is unrivaled in building interesting ideas and learning everything in the process.
						</a>
					</div>
				
				</div>
			</section>

			<section className="my-projects-section">
				<div className="container-center">
					<div className="my-work-title">
						<a>Projects</a>
					</div>
					<div className="my-work-description">
						<a>
							My curiosity and eagerness fuels my motivation to build with software and engineering.
							From designing artifical intelligence models to building electric skateboards, my passion is unrivaled in building interesting ideas and learning everything in the process.
						</a>
					</div>

					<div className="my-work-projects">

							<ProjectCard 
								className="project-card"
								href="/projects"
								image={waygoThumbnail}
								title="Waygo Navigation App" 
								category="Web/Mobile App" 
								description="Waygo is a navigation app allowing users to 
								plan optimal routes, visualize traffic, 
								find nearby transit, and much more."
							/>

							<ProjectCard 
								className="project-card"
								href="/projects"
								image={speednetThumbnail}
								title="Deeplearning Car Speednet" 
								category="Python" 
								description="AI car speed prediction model in PyTorch using front-facing camera driving data."
								onClick={ () => {
									
								} }
							/>

							<ProjectCard 
								className="project-card" 
								href="/projects"
								image={weatherAppThumbnail}
								title="Weather App Widget" 
								category="Web/Mobile App" 
								description="Small weather app widget with animation and icons to be displayed in a browser or mobile app."
								onClick={ () => {
									
								} }
							/>
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
			</section>
			
		</div>
	)
}

export default Homepage;