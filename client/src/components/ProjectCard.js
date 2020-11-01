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
		<a className="project-card" href={props.href}>
			<div className="project-image-container">
				<img src={ props.image } alt="Project Image" />
			</div>
			<div className="project-info">
				<div className="project-title">{ props.title }</div>
				<div className="project-category">{ props.category }</div>
				{/* <div className="project-description">{ props.description }</div> */}
			</div>
			
		</a>
	);

}

export default ProjectCard;