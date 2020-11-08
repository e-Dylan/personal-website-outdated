import waygoThumbnail from './resources/project_thumbnails/waygo-thumbnail.png';
import speednetThumbnail from './resources/project_thumbnails/speed-net-thumbnail.png';
import weatherAppThumbnail from './resources/project_thumbnails/weather-app-thumbnail.png';

const projects = {
	waygo: {
		title: "Waygo Navigation App",
		image: waygoThumbnail,
		category: "Web/Mobile App" ,
		tech: "React, NodeJS, SCSS, MySQL, REST",
		description: "Waygo is a navigation app allowing users to plan optimal routes, visualize traffic, find nearby transit, and much more.",
		"date": "06/12/2020 - Current",
	},
	speednet: {
		title: "Deeplearning Car Speednet",
		image: speednetThumbnail,
		category: "Machine Learning Algorithm",
		tech: "Python, PyTorch, Tensorboard",
		description: "AI car speed prediction model in PyTorch using front-facing camera driving data.",
		date: "07/15/2020",
	},
	weather_app: {
		title: "Weather App Widget",
		image: weatherAppThumbnail,
		category: "Web/Mobile App",
		tech: "Javascript, HTML/CSS, API",
		description: "Small weather app widget with animation and icons to be displayed in a browser or mobile app.",
		date: "02/21/2017",
	},
	
}

export default projects;