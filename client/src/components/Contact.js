import React from "react";

import '../components-styles/Contact.scss';

function Contact(props) {
	return (
		<div>
			<svg className="contact-footer-svg" preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" class="svgcolor-light">
				<path d="M0 0 L50 100 L100 0 Z" fill="white" stroke="white"></path>
			</svg>
			<div className="container-center">
				<div className="section-title" id="contact-section-title">
					<a>CONTACT ME</a>
					<div className="section-title-underline"></div>
				</div>

				<div className="contact-area">
					<div className="contact-form">
						<div className="form-header">
							Have any questions or want to get in contact with me?
						</div>
						<input 
							className="contact-input"
							placeholder="Enter your name"
						></input>
						<input
							type="email" 
							className="contact-input"
							placeholder="Enter a valid email address"
						></input>
						<textarea 
							type="text"
							className="contact-text-area"
							placeholder="Enter your message"
						></textarea>
						<button className="submit-button">Submit</button>
					</div>
					<div className="my-info">

					</div>
				</div>
				
			</div>
		</div>
		
	)
}

export default Contact;