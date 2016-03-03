import React from 'react';
import ApiUtils from '../utils/apiUtils';
import JoinTeamFormActions from '../actions/JoinTeamFormActions';
import JoinTeamFormStore from '../stores/JoinTeamFormStore';
import AuthenticatedComponent from '../decorators/AuthenticatedComponent';

var _ = require('underscore');


export default AuthenticatedComponent (class JoinTeamForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {teams: {}, actions: JoinTeamFormStore.getState()};
		this._load = this._load.bind(this);
		
	}

	componentDidMount(){
		this._load();
	}

	_load() {
	 	ApiUtils.getTeams()
	 		.done((data) => {
	 			console.log(data);
	 			this.setState(data);

	 			console.log(this.state.teams);
	 			this.showTeamNames();

	 	})
	 	.fail((jqXhr) => {

	 		console.log('Error Message from server: ');
	 	});	

	}

	get showTeamNames() {
		var showTeamNames = [];

	 	for (var i = 0; i < this.state.teams.length - 1; i++) {
			
			showTeamNames.push(<option value={this.state.teams[i].uuid} >{this.state.teams[i].team_name}</option>);
		}

		return showTeamNames;
	}

	handleSubmit(event) {
		event.preventDefault();
							

		// Form validation

		//Check each field is not empty;

		if (event === '') {
			this.refs.team_name.focus();
			AddTeamActions.invalidTeam();
		}

		else {
			JoinTeamFormActions.joinTeam(event);
		}
	}

	render() {

		return (
			<div className="pre_head_padding">
				<div className="map_background">
				</div>
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
								<form onSubmit={this.handleSubmit.bind(this)}>	

									<div className='form-group'>
										<select class="form-control" ref="team_uuid" placeholder="Team Type"  onChange={JoinTeamFormActions.updateTeam}>
											<option value="">Select a Team</option>
											{this.showTeamNames}
										</select>
									</div>


									<p className='text-left'><button type='submit' className='btn btn-large red-btn width_100 btn_color'>Join Team <span className="glyphicon glyphicon-chevron-right arrow-right" aria-hidden="true"></span></button></p>

								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
});