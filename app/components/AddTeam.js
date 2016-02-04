import React from 'react';
import {Link} from 'react-router';
import AddTeamStore from '../stores/AddTeamStore';
import AddTeamActions from '../actions/AddTeamActions';

class AddTeam extends React.Component {
	render() {
		console.log('rendering form page');
		return (
			<div className='text-center team-options red-bg'>
				<h2>Start A Team</h2>
				<div className='col-sm-6'>
					<button className='btn btn-large blue-btn'><Link to='/signup'>Start a Team</Link></button>
				</div>
				<div className='col-sm-6'>
					<button className='btn btn-large blue-btn'><Link to='/join_team'>Join Team</Link></button>
				</div>
			</div>
		);
	}
}

export default AddTeam;