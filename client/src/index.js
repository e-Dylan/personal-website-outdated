import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*

  Only the app should ever be rendered, on the app will determine which
  component gets rendered based on app state data
  (show main app page, /login route, show login page, always render nav, etc.)

  Use app to render components based on state 
  Use Router in app, import components in App.

*/

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
