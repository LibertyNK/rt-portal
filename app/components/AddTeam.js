import React from 'react';
import AddTeamStore from '../stores/AddTeamStore';
import AddTeamActions from '../actions/AddTeamActions';

class AddTeam extends React.Component {
	render() {
		console.log('rendering form page');
		return (
			<div className='alert alert-danger text-center'>
				<p>Add Team Form</p>
			</div>
		);
	}
}

export default AddTeam;