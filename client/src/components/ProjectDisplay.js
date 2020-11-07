import { React } from 'react';
import { Link } from 'react-router-dom';

import '../components-styles/ProjectDisplay.scss';

/**
 * Props:
 * image=
 * title=
 * category=
 * description=
 * date=
 * 
 * @param {} props 
 */

function ProjectDisplay(props) {
	return (
		<div className="project-display-container">
			<div className="project-display">
				<div className="project-image">

				</div>
				<div className="project-info">
					<div className="project-title">Title</div>
				</div>
			</div>
			
		</div>
		
	);

}

export default ProjectDisplay;