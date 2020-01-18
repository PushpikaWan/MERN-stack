import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

class App extends Component {
	render() {
		return (
			<div style= {{height:'100vh'}}>
				<SurveyList />
				<div className="fixed-action-button right">
					<Link to="/surveys/new" className="btn-floating btn-large red">
						<i className="material-icons">add</i>
					</Link>
				</div>
			</div>
		);
	}
}

export default App;
