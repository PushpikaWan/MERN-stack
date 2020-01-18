import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				Dashboard
				<div className="fixed-action-button">
					<Link to="/surveys/new" className="btn-floating btn-large red">
						<i className="material-icons">add</i>
					</Link>
				</div>
			</div>
		);
	}
}

export default App;
