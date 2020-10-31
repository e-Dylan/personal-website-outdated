import { React } from 'react';

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

export default function Nav(props) {
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
				<div className="nav-logo">
					<a href="/">Dylan Smith</a>
				</div>	
			</div>
			
			<ul className="nav-links">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/projects">Projects</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
			</ul>
		</nav>
	)
}