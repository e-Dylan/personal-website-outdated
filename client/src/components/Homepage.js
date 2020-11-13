import React, { useEffect, useState, useRef } from "react";

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

// Homepage animation
import * as THREE from 'three';
// import BIRDS from 'vanta/dist/vanta.birds.min'
import GLOBE from 'vanta/dist/vanta.globe.min'
import { DataTexture2DArray } from "three";

const pronounsArr = ["software engineer", "creator", "student", "programmer", "n innovator"]
const typingDelay = 300;
const erasingDelay = 300;
const newTextDelay = 3500; // delay to begin new text
var wordIdx = ~~(Math.random() * pronounsArr.length);
var charIdx = 0;

const type = () => {
	const typedTextSpan = document.querySelector(".typed-text");
	const caretSpan = document.querySelector(".caret");

	if (charIdx < pronounsArr[wordIdx].length) {
		if (!caretSpan.classList.contains('typing')) caretSpan.classList.add('typing');
		typedTextSpan.innerHTML += pronounsArr[wordIdx].charAt(charIdx);
		charIdx++;
		setTimeout(type, typingDelay);
	} else {
		caretSpan.classList.remove('typing');
		setTimeout(erase, newTextDelay);
	}
}

const erase = () => {
	const typedTextSpan = document.querySelector(".typed-text");
	const caretSpan = document.querySelector(".caret");

	if (charIdx > 0) {
		typedTextSpan.innerHTML = " " + pronounsArr[wordIdx].substring(0, charIdx - 1);
		charIdx--;
		setTimeout(erase, erasingDelay);
	} else {
		caretSpan.classList.remove('typing');
		wordIdx++;
		if (wordIdx >= pronounsArr.length) wordIdx = 0;
		setTimeout(type, typingDelay + 100);
	}
}

function Homepage(props) {

	const [vantaEffect, setVantaEffect] = useState(0);
	const myRef = useRef(null);

	useEffect(() => {
		// initialize typing effect
		if (pronounsArr.length) setTimeout(type, newTextDelay + 250);
		console.log('started');

		if (!vantaEffect) {
		  setVantaEffect(GLOBE({
			el: myRef.current,
			THREE: THREE,
			point: 2,
			spacing: 17,
			mouseControls: true,
			color: 0xdcdcdc,
			color2: 0xff3f81,
			backgroundColor: 0x30303c,
			scaleMobile: 0.80,
		  }));
		}
		return () => {
		  if (vantaEffect) vantaEffect.destroy()
		}
	  }, [vantaEffect])


	return (
		<div className="homepage">
			<section className="home-section">
				<div className="parallax-image" ref={myRef}>
					<div className="image-section-container center">
						<div className="hello-text">
							Hello, I'm
							<span className="hello-text highlight"> Dylan</span>.
						</div>
						
						<br />
						<div className="hello-text">I'm a  
							<span className="typed-text highlight"> </span>
							<span className="caret">&nbsp;</span>.
						</div>
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