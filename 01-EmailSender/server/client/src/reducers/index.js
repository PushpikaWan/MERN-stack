import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import authReducer from './authReducers';

export default combineReducers({
	auth: authReducer,
	form: reduxFormReducer
});
