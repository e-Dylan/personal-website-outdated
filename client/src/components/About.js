import React from "react";

import '../components-styles/About.scss';

import mlIcon from '../resources/about/about_icons/mlIcon.png';
import fullstackIcon from '../resources/about/about_icons/fullstackIcon.png';
import embeddedIcon from '../resources/about/about_icons/embeddedIcon.png';
import mobileIcon from '../resources/about/about_icons/mobileIcon.png';

import portraitPhoto from '../resources/about/portrait-photo.jpeg';

function About(props) {
	return (
		<div className="container-center">

			<div className="section-title">
				<a>ABOUT</a>
			</div>
			<div className="about-icons">
				<div className="icon-wrapper">
					<img src={mlIcon} />
					<div className="icon-title">Machine/Deep Learning</div>
					<div className="icon-subtitle">Python, PyTorch, Tensorflow, Tensorboard</div>
				</div>
				<div className="icon-wrapper">
					<img src={fullstackIcon} />
					<div className="icon-title">Full Stack Development</div>
					<div className="icon-subtitle">React, Node.js, Express, Docker, MySQL</div>
				</div>
				<div className="icon-wrapper">
					<img src={embeddedIcon} />
					<div className="icon-title">Embedded Systems</div>
					<div className="icon-subtitle">Python, Arduino, Linux, C++</div>
				</div>
				<div className="icon-wrapper">
					<img src={mobileIcon} />
					<div className="icon-title">Mobile Development</div>
					<div className="icon-subtitle">Android/iOS, React Native, Java, Kotlin</div>
				</div>
			</div>

			<div className="about-me-card">
				<div className="portrait-column">
					<img src={portraitPhoto} />
					<div className="portrait-about-me-title">ABOUT ME</div>
					<div className="portrait-about-me">
						I'm a software engineer who thrives from creating new ideas and constantly learning new things. I'm currently exploring machine learning, full-stack development, and embedded systems.
						I am a dedicated lifelong learner with a passion for engineering.
					</div>
				</div>
				<div className="about-me-topics">
					<div className="technologies-languages">
						<div className="technologies-languages-title">Technologies and Languages</div>
					</div>
					<div className="skills">Skills</div>
				</div>
			</div>
			<div className="about-description">
				123
			</div>
				
		</div>
	)
}

export default About;