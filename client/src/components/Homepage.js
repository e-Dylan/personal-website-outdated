import React from "react";

import '../components-styles/Homepage.scss';
import '../components-styles/About.scss';
import '../components-styles/Projects.scss';

import Nav from '../components/Nav';
import About from '../components/About';
import ProjectCard from './ProjectCard';

import waygoThumbnail from '../resources/project_thumbnails/waygo-thumbnail.png';
import speednetThumbnail from '../resources/project_thumbnails/speed-net-thumbnail.png';
import weatherAppThumbnail from '../resources/project_thumbnails/weather-app-thumbnail.png';

import linkedinIcon from '../resources/social-icons/linkedin.svg';
import githubIcon from '../resources/social-icons/github.svg';
import instagramIcon from '../resources/social-icons/instagram.svg';

import projects from '../projects';

function Homepage(props) {

	return (
		<div className="homepage">
			<section className="landing-image-section">
				<div className="parallax-image">
					<div className="image-section-container center">
						<div className="hello-text">
							Hello, I'm
							<span className="hello-text highlight"> Dylan</span>.
						</div>
						
						<br />
						<div className="hello-text">I'm a software engineer.</div>
						<div className="main-links">
							<a href="https://linkedin.com/in/dylan-smith-5b2b971b8">
								<div className="front-icon">
									<img src={linkedinIcon} />
								</div>
							</a>
							<a href="https://github.com/e-Dylan">
							<div className="front-icon">
									<img src={githubIcon} />
								</div>
							</a>
							<a href="https://instagram.com/dylansmi.th">
							<div className="front-icon">
									<img src={instagramIcon} />
								</div>
							</a>
						</div>
					</div>
				</div>
			</section>

			<section className="navbar-section">
				<Nav />
			</section>

			<section className="about-section">
				<About />
			</section>

			<section className="my-projects-section">
				<div className="container-center">
					<div className="section-title">
						<a>PROJECTS</a>
					</div>
					<div className="about-description">
						<a>
							My curiosity and eagerness fuels my motivation to build with software and engineering.
							From designing artifical intelligence models to building electric skateboards, my passion is unrivaled in building interesting ideas and learning everything in the process.
						</a>
					</div>

					<div className="projects-container">

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
			
			<section className="footer">
				<div></div>
			</section>
		</div>
	)
}

export default Homepage;