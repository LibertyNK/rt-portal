import React from 'react';
import AddTeamActions from '../actions/JoinTeamFormActions';
import AddTeamStore from '../stores/JoinTeamFormStore';


class JoinTeam extends React.Component {

	render() {

		return (
			<div className='container signup'>

				<h4>Are you sure you want to join this team?</h4>

				<div className='row'>
					<button>Yes</button>
					<button>No</button>
				</div>
			</div>
		);
	}
}

export default JoinTeamForm;