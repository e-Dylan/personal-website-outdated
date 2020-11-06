import { React } from 'react';
import { Link } from 'react-router-dom';

import '../components-styles/ProjectCard.scss';

/**
 * Props:
 * image=
 * title=
 * category=
 * description=
 * date=
 * displayCard=
 * 
 * @param {} props 
 */

function ProjectCard(props) {
	return (
		<div className="project-card" onClick={() => {
			
		}}>
			<div className="project-image-container">
				<div className="overlay">
					<div className="image-button">
						View More
					</div>
					<div className="image-title">
						{props.title}
					</div>
				</div>
				<img src={ props.image } alt="Project Image" />
			</div>
			<div className="project-info">
				<div className="project-title">{ props.title }</div>
				<div className="project-category">{ props.category }</div>
				{/* <div className="project-description">{ props.description }</div> */}
			</div>
		</div>
			
		
	);

}

export default ProjectCard;