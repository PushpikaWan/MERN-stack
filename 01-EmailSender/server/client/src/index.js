import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers/index';

//development only axios helper
import axios from 'axios';
window.axios = axios;
//create store need list of all reducers, initial state and middleware call
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// need to use jsx syntax <App />
ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
