import React from "react";

import '../components-styles/Homepage.scss';
import '../components-styles/About.scss';
import '../components-styles/Projects.scss';

import Nav from '../components/Nav';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

import linkedinIcon from '../resources/social-icons/linkedin.svg';
import githubIcon from '../resources/social-icons/github.svg';
import instagramIcon from '../resources/social-icons/instagram.svg';

function Homepage(props) {
	return (
		<div className="homepage">
			<section className="home-section">
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
					{/* <ProjectDisplay /> testing */}
				</div>
			</section>

			<section className="navbar-section">
				<Nav />
			</section>

			<section className="about-section">
				<About />
			</section>

			<section className="projects-section">
				<Projects />
			</section>
			
			<section className="contact-section">
				<Contact />
			</section>

			<section className="footer">
				<div className="footer">

				</div>
			</section>
		</div>
	)
}

export default Homepage;