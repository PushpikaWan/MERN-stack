import axios from 'axios';

import { FETCH_USER, SUBMIT_SURVEY } from './types';

export const fetchUser = () => async (dispatch) => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (valuse, history) => async (dispatch) => {
	const res = await axios.post('/api/surveys',valuse);
	history.push('/surveys');
	//due to user credits needed to be update
	dispatch({ type: FETCH_USER, payload: res.data });
};

