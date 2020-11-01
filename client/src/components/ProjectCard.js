import { React } from 'react';
import { Link } from 'react-router-dom';

import '../components-styles/ProjectCard.scss';

/**
 * Props:
 * link=
 * image=
 * title=
 * category=
 * description=
 * 
 * @param {} props 
 */

function ProjectCard(props) {
	return (
		<div className="project-card">
			<Link to={ props.link }>
				<div className="project-image">
					<img className="project-image" src={ props.image } alt="Project Image" />
				</div>
				<div className="project-title">{ props.title }</div>
				<div className="project-category">{ props.category }</div>
				<div className="project-description">{ props.description }</div>
			</Link>
		</div>
	)

}

export default ProjectCard;