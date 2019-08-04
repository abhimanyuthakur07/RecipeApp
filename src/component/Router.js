import React from 'react';
import App from '../App';
import Recipe from './Recipe';

import {BrowserRouter , Switch , Route} from 'react-router-dom';

const Router = () => (
	<BrowserRouter>
	<Switch>

	<Route path = "/" component ={App} exact />
	<Route path = "/recipe/:id" component ={Recipe}  />
	
	

	</Switch>
	
	</BrowserRouter>
	);

export default Router;
