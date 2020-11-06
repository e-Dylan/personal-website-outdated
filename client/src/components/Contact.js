import React from "react";

import '../components-styles/Contact.scss';

function Contact(props) {
	return (
		<div className="container-center">
			<div className="section-title">
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
						rows="3"
						className="contact-input"
						placeholder="Enter your message"
					></textarea>
					<button className="submit-button">Submit</button>
				</div>
				<div className="my-info">

				</div>
			</div>
			
		</div>
	)
}

export default Contact;