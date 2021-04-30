import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Result from './components/results';
import Details from './components/details';

//Browser Router
//it  allows us to have more than one page on the server


const Root = (
	<BrowserRouter>
		<Switch>
			<Route path='/results' component={Result}/>
			<Route path='/details/:itemId' component={Details}/>
			<Redirect path='/' to='/results'/>
		</Switch>
	</BrowserRouter>
	);
//entry point

ReactDOM.render(Root, document.getElementById('root'));

