import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import reducers from './reducers/index';

//create store need list of all reducers, initial state and middleware call
const store = createStore(reducers, {}, applyMiddleware());

// need to use jsx syntax <App />
ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
