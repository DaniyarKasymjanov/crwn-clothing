import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

function App() {
	return (
		<div className="App">
			<Route exact path="/" component={HomePage} />
			<Route path="/hats" />
		</div>
	);
}

export default App;
