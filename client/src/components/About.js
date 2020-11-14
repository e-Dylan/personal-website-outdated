import React, { useEffect } from "react";

// import scrollFunction from './Homepage';

import '../components-styles/About.scss';

import mlIcon from '../resources/about/about_icons/mlIcon.png';
import fullstackIcon from '../resources/about/about_icons/fullstackIcon.png';
import embeddedIcon from '../resources/about/about_icons/embeddedIcon.png';
import mobileIcon from '../resources/about/about_icons/mobileIcon.png';

import portraitPhoto from '../resources/about/portraitPhoto.JPG';
import { languageSkills } from '../languageSkills';
import { skillsItems } from '../skillsItems';
import { Link } from "react-router-dom";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const aboutAnimations = () => {
	var skillItems = document.querySelectorAll('.skill-item');
	window.removeEventListener('scroll', scrollFunction);
	skillItems.forEach((item, index) => {
		console.log("changing");
		if (item.style.animation)
			item.style.animation = '';
		else
			item.style.animation = `aboutFadeFromTop 0.5s ease ${index/21 + 0.1}s`
			setTimeout(() => {
				item.style.display = 'flex';
				item.style.opacity = 1;
				item.style.transform = `translateY(${0}%)`;
			}, index/25 + 0.07)
		});
}

const scrollFunction = () => {
	var pos = window.pageYOffset;
	var topAbout = document.querySelector(".about-section").offsetTop - 300;
	if (pos > topAbout) {
		aboutAnimations();
	}
}

function About(props) {

	useEffect(() => {
		// scroll event listener
		window.addEventListener('scroll', scrollFunction)
	}, [])

	return (
		<div className="container-center">

			<div className="section-title">
				<ScrollAnimation animateIn="animate__fadeInLeft" duration="0.6">ABOUT</ScrollAnimation>
				<ScrollAnimation className="section-title-underline" animateIn="animate__fadeInLeft" duration="0.6" delay="500"></ScrollAnimation>
			</div>
			<div className="about-icons">
				<ScrollAnimation className="icon-wrapper" animateIn='animate__flipInY' duration="0.8" animateOnce="true" delay="0">
					<img src={mlIcon} />
					<div className="icon-title">Machine/Deep Learning</div>
					<div className="icon-subtitle">Python, PyTorch, Tensorflow, Tensorboard</div>
				</ScrollAnimation>
				<ScrollAnimation className="icon-wrapper" animateIn='animate__flipInY' duration="0.8" animateOnce="true" delay="100">
					<img src={fullstackIcon} />
					<div className="icon-title">Full Stack Development</div>
					<div className="icon-subtitle">React, Node.js, Express, Docker, MySQL</div>
				</ScrollAnimation>
				<ScrollAnimation className="icon-wrapper" animateIn='animate__flipInY' duration="0.8" animateOnce="true" delay="200">
					<img src={embeddedIcon} />
					<div className="icon-title">Embedded Systems</div>
					<div className="icon-subtitle">Python, Arduino, Linux, C++</div>
				</ScrollAnimation>
				<ScrollAnimation className="icon-wrapper" animateIn='animate__flipInY' duration="0.8" animateOnce="true" delay="300">
					<img src={mobileIcon} />
					<div className="icon-title">Mobile Development</div>
					<div className="icon-subtitle">Android/iOS, React Native, Java, Kotlin</div>
				</ScrollAnimation>
			</div>

			<div className="about-me-container">
			{/* data-aos="fade-right" data-aos-duration="800" data-aos-delay="400" */}
				<ScrollAnimation animateIn='animate__fadeInLeft' duration="1" animateOnce="true" className="about-me-card">
					<div className="portrait-column">
						<img src={portraitPhoto} />
						<div className="portrait-about-me-title">ABOUT ME</div>
						<div className="portrait-about-me" id="trigger-fade">
							I'm a software engineer who thrives from creating new ideas and constantly learning new things. I'm currently exploring machine learning, full-stack development, and embedded systems.
						</div>
					</div>
				</ScrollAnimation>
				<div className="about-me-topics">
					<div className="technologies-languages">
						<div className="technologies-languages-title" key="techlangtitle">Technologies and Languages</div>
						<div className="language-bars">
		
							{ Object.keys(languageSkills).map((key, index) => {
								return (
									<ScrollAnimation className="bar" duration="1" animateIn='animate__fadeInRight' animateOnce="true" key={key}>
										<div className="bar-filled" style={{width: languageSkills[key].percent}}>
											<div className="lang-tag">{languageSkills[key].language}</div>
										</div>
										<span className="level-tag">{languageSkills[key].level}</span>
									</ScrollAnimation>
								);
								
							}) }

						</div>
					</div>
					

					<div className="skills">
						<div className="skills-title">Skills</div>
						<div className="skills-items">
							{ skillsItems.map(item => {
								return (
									<div className="skill-item" key={item}>
										{item}
									</div>
								);
							}) }
						</div>
					</div>
				</div>
			</div>
			
			<div className="about-description">
				"I love to build things, and I love to learn about just about anything; so I spend my time building projects and learning new things that interest me, while building things that interest me."
			</div>
		</div>
	)
}

export default About;