import React from 'react';
import {Link} from 'react-router';
import AddTeamStore from '../stores/AddTeamStore';
import AddTeamActions from '../actions/AddTeamActions';

class AddTeam extends React.Component {
	render() {
		console.log('rendering form page');
		return (
						<div className='container signup'>

				<h4>Join Team</h4>

				<p>This form would join a user to a team from a dropdown.</p>

				<div className='row'>
					<form >	
						<label className='control-label'>Team Name</label>	

						<div className='form-group'>
							<select class="form-control">
								<option value="">Select a Team</option>
								<option value="team_id">Team 1</option>
								<option value="team_id">Team 1</option>
								<option value="team_id">Team 2</option>
								<option value="team_id">Team 3</option>
								<option value="team_id">Team 4</option>
								<option value="team_id">Team 5</option>
							</select>
						</div>

						<div className='form-group'>
							<textarea type='text' className='form-control' ref="aboutTeam" ></textarea>
						</div>

						
						<p className='text-center'><button type='submit' className='btn btn-lg btn-success'>Join</button></p>

					</form>
				</div>
			</div>
		);
	}
}

export default AddTeam;