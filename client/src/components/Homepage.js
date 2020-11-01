import React from "react";

import '../components-styles/Homepage.scss';

import ProjectCard from './ProjectCard';

import waygoThumbnail from '../resources/waygo-thumbnail.png';

function Homepage(props) {

	return (
		<div>
		<section className="landing-image-section">
			<div className="parallax-image full-screen">
				<div className="image-section-container center">
					<h1 className="image-header">Dylan Smith</h1>
					<br />
					<h3 className="image-info">Self-learning software engineer learning software and electrical engineering through research & development.</h3>
				</div>
			</div>
		</section>

		<section className="my-work">
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

				<div className="my-work-projects">
					<ProjectCard 
						className="project-card"
						link={"/projects"}  
						image={waygoThumbnail}
						title="Waygo Navigation App" 
						category="Web/Mobile App" 
						description="Waygo is a navigation app allowing users to 
						plan optimal routes, visualize traffic, 
						find nearby transit, and much more."
					/>
				</div>

			</div>
		</section>
			
			
		</div>
	)
}

export default Homepage;