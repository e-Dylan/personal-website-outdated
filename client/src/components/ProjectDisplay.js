import { React, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { ProjectContext } from '../contexts/ProjectContext';

import '../components-styles/ProjectDisplay.scss';

import { hideProjectDisplay } from './ProjectCard';

/**
 * Context value:
 * image=
 * title=
 * category=
 * tech=
 * description=
 * date=
 * 
 * @param {} props 
 */

function ProjectDisplay(props) {

	const { value, setValue } = useContext(ProjectContext);

	return (
		<div className="project-display-bg hidden">
			<div className="project-display-container hidden" tabIndex="1" onBlur={props.onBlur}>
					
				<div className="project-display">

					<div className="image-col">
						<div className="project-image">
							<img src={value.image} />
						</div>
					</div>

					<div className="info-col">
						<div className="project-info">
							<div className="title">
								<div className="project-title">{ value.title }</div>
								<div className="project-category">{ value.category }</div>
							</div>
							
							<div className="description">
								{ value.description }
							</div>

							<div className="tech">
								Built with:
								<div className="project-tech">{ value.tech }</div>
							</div>

							<div className="project-buttons">
								<button className="project-button">Live Demo</button>
								<button className="project-button">Github</button>
								<button className="project-button" onClick={hideProjectDisplay}>Close</button>
							</div>

							<div className="project-date">{ value.date }</div>
							
						</div>
					</div>

				</div>
				
			</div>
		</div>
		
		
	);

}

export default ProjectDisplay;