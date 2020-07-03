import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { StickyContainer } from 'react-sticky';

import Route from './components/Route';
import TestingComponent from './components/testing_component';
import {
	DefaultLayout,
} from './layouts';
import {
	HomePage
} from './views';

import 'antd/dist/antd.css';
import './assets/scss/style.scss';

function App() {
	return (
		<div className="App">
			<StickyContainer>
				<BrowserRouter>
					<Switch>
						<Route path='/' exact component={ HomePage } layout={ DefaultLayout }/>
						<Route path='/test' exact component={ TestingComponent } />
					</Switch>
				</BrowserRouter>
			</StickyContainer>
		</div>
	);
}

export default App;
