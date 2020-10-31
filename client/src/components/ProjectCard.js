import { React } from 'react';
import { Link } from 'react-rouder-dom';
import './ProjectCard.scss';

function ProjectCard(props) {
	return (
		<div className="project-card">
			<Link to="">
				<div className="project-image">
					<img src="" alt="Project Image" />
				</div>
				<div className="project-title"></div>
				<div className="project-category"></div>
				<div className="project-description"></div>
			</Link>
		</div>
	)

}

export default ProjectCard;