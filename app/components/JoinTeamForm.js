import React from 'react';
import JoinTeamFormActions from '../actions/JoinTeamFormActions';
import JoinTeamFormStore from '../stores/JoinTeamFormStore';


class JoinTeamForm extends React.Component {

	render() {

		return (

		<div className="form_card">
			<div className='text-left'>

				<div className="row">
					<div className='col-sm-12'>
						<h2>Join a team</h2>
					</div>
				</div>

				<div className="row">
					<div className='col-sm-12'>
						<div className="banner-border-seperation"></div>
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-12 settings_inputs'>
						<form >	

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
								<textarea type='text' className='form-control' ref="join_team_why" placeholder="Does this team know you yet? If not, send a short message to the team admin introducing yourself and letting them know why you are joining!"></textarea>
							</div>

							<p className='text-center'><button type='submit' className='btn btn-lg btn-success'>Join Team</button></p>

						</form>
					</div>
				</div>
			</div>
		</div>

		);
	}
}

export default JoinTeamForm;