import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//React Redux facilita la integracion de redux con componentes de react
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Result from './components/results';
import Details from './components/details';
import store from './redux/store';
//Browser Router
//it  allows us to have more than one page on the server


const Root = (
	<Provider store={store}>
	<BrowserRouter>
		<Switch>
			<Route path='/results' component={Result}/>
			<Route path='/details/:itemId' component={Details}/>
			<Redirect path='/' to='/results'/>
		</Switch>
	</BrowserRouter>	
	</Provider>
	);
//entry point

ReactDOM.render(Root, document.getElementById('root'));











