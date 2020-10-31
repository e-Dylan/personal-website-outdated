import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Nav from './components/Nav';

import Homepage from './components/Homepage';
import Projects from './components/Projects';
import Articles from './components/Articles';
import About from './components/About';

function App() {
	return (
		<Router>
			<div className="app">
				<Nav />
				<Switch>
					<Route exact path="/" component={ Homepage } />
					<Route path="/projects" component={ Projects } />
					<Route path="/about" component={About } />
				</Switch>

			</div>
		</Router>
	);
}

export default App;
