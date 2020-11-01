import waygoThumbnail from './resources/project_thumbnails/waygo-thumbnail.png';
import speednetThumbnail from './resources/project_thumbnails/speed-net-thumbnail.png';
import weatherAppThumbnail from './resources/project_thumbnails/weather-app-thumbnail.png';

const projects = {
	waygo: {
		title: "Waygo Navigation App",
		image: waygoThumbnail,
		category: "Web/Mobile App" ,
		description: "Waygo is a navigation app allowing users to plan optimal routes, visualize traffic, find nearby transit, and much more."
	},
	speednet: {
		title: "Deeplearning Car Speednet",
		image: speednetThumbnail,
		category: "Python",
		description: "AI car speed prediction model in PyTorch using front-facing camera driving data."
	},
	weather_app: {
		title: "Weather App Widget",
		image: weatherAppThumbnail,
		category: "Web/Mobile App",
		description: "Small weather app widget with animation and icons to be displayed in a browser or mobile app."
	}
}

export default projects;