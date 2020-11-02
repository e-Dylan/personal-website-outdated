import React from 'react';

import $ from 'jquery';


import '../App.css';
import '../components-styles/Nav.scss';

const navSlide = () => {
	// Toggle nav open/close.
	const navbar = document.querySelector(".nav-links");
	navbar.classList.toggle("nav-active");

	// Animate nav links fade-in
	const navLinks = document.querySelectorAll(".nav-links li");
	navLinks.forEach((link, index) => {
		if (link.style.animation)
			// if they've already been animated (open), close them.
			link.style.animation = '';
		else
			// if they're closed, animate open again.
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.15}s`;
	})

	// Burger animation
	const burger = document.querySelector(".burger");
	burger.classList.toggle('toggle');

}

	
function setLinkActive(e) {
	const navLinks = document.querySelectorAll(".nav-link");

	navLinks.forEach((link) => {
		if (link.classList.contains("active"))
			link.classList.remove("active");
	});

	e.currentTarget.classList.add("active");
}

export default function Nav() {
	return (
		<nav>
			<div className="nav-left">
				<div className="burger" onClick={ () => {
					navSlide();
				} }>
					<div className="line1"></div>
					<div className="line2"></div>
					<div className="line3"></div>
				</div>
			</div>
			
			<div className="nav-link-bar">
				<ul className="nav-links">
					<li>
						<div className="nav-link" id="home-link" dest="home" onClick={setLinkActive.bind(this)}>Home</div>
					</li>
					<li>
						<div className="nav-link" id="projects-link" dest="projects" onClick={setLinkActive.bind(this)}>About</div>
					</li>
					<li>
						<div className="nav-link" id="blog-link" dest="blog" onClick={setLinkActive.bind(this)}>Projects</div>
					</li>
					<li>
						<div className="nav-link" id="about-link" dest="about" onClick={setLinkActive.bind(this)}>Blog</div>
					</li>
					<li>
						<div className="nav-link" id="contact-link" dest="contact" onClick={setLinkActive.bind(this)}>Contact</div>
					</li>
				</ul>
			</div>
			
		</nav>
	)	
}