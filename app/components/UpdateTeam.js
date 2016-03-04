import React from 'react';
import ColorPicker from 'react-colors-picker';
import {Link} from 'react-router';
import ApiUtils from '../utils/apiUtils';
import UpdateTeamActions from '../actions/UpdateTeamActions';
import UpdateTeamStore from '../stores/UpdateTeamStore';
import CurrentUserStore from '../stores/CurrentUserStore';
import AuthenticatedComponent from '../decorators/AuthenticatedComponent';

var _ = require('underscore');


export default AuthenticatedComponent (class UpdateTeam extends React.Component {
	constructor(props) {
		super(props);
		this.state = UpdateTeamStore.getState();
		this.onChange = this.onChange.bind(this);
		this._load = this._load.bind(this);
		this.changeHandler = this.changeHandler.bind(this);
	}

	componentDidMount(){
		UpdateTeamStore.listen(this.onChange);
		this._load();
	}

	componentWillUnmount(){
		UpdateTeamStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	changeHandler (colors) {
	  console.log(colors.color);
	  this.color = colors.color;
	}

	_load() {
	 	ApiUtils.getTeam(this.props.user.team_uuid)
	 		.done((data) => {
	 			this.setState(data.team);
	 			this.members = data.users;
	 			console.log(data);
	 	})
	 	.fail((jqXhr) => {
	 		console.log('Error Message from server: ');
	 	});	
	}
	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.uuid);
		var team = {
			team_name: this.state.team_name,
			team_type: this.state.team_type,
			color: this.color,
			goal: this.state.goal,
			about: this.state.about,
			username: this.state.username,
			address1: this.state.address1,
			address2: this.state.address2,
			team_city: this.state.team_city,
			team_state: this.state.team_state,
			zipcode: this.state.zipcode,
			country: this.state.country,
			uuid: this.props.user.team_uuid
		}
		//Initial form validation


	
		if (!this.state.team_name || !this.state.team_type || !this.state.username || !this.state.goal || !this.state.about ) {
            

	        if (!team.team_name) {
				this.refs.team_name.focus();
				UpdateTeamActions.invalidTeamName();
			}

			if (!team.team_type) {
				this.refs.team_type.focus();
				UpdateTeamActions.invalidTeamType();
			}

			if (!team.color) {
				this.refs.color.focus();
				UpdateTeamActions.invalidColor();
			}

			if (!team.goal) {
				this.refs.goal.focus();
				UpdateTeamActions.invalidGoal();
			}

			if (!team.about) {
				this.refs.about.focus();
				UpdateTeamActions.invalidAbout();
			}

			if (!team.username) {
				this.refs.username.focus();
				UpdateTeamActions.invalidUsername();
			}

			if (!team.address1) {
				this.refs.address1.focus();
				UpdateTeamActions.invalidAddress1();
			}

			if (!team.team_city) {
				this.refs.team_city.focus();
				UpdateTeamActions.invalidTeamCity();
			}

			if (!team.team_state) {
				this.refs.team_state.focus();
				UpdateTeamActions.invalidTeamState();
			}

			if (!team.zipcode) {
				this.refs.zipcode.focus();
				UpdateTeamActions.invalidZipCode();
			}

			if (!team.country) {
				this.refs.country.focus();
				UpdateTeamActions.invalidCountry();
			}

			return;
        }

        else {

        	if(this.usernameCheck !== team.username) {
        		if(team.username.match(/\s/g)){
					this.refs.username.focus();
					UpdateTeamActions.invalidUsernameSpace();
					return;
				}

				else {
					UpdateTeamActions.update(team);
				}
			}

			else {
				UpdateTeamActions.update(team);
			}
        }
	}


	render() {
		var errors = this.state.errorMessage || [];

		var single_error = errors.map(function (err, key) { return <p key = {key}> {err} </p> });


		return (

			<div className="pre_head_padding">
				<div className="map_background">
				</div>
				
				<form className="margin-ten-percent-top" onSubmit={this.handleSubmit.bind(this)}>	

					<div className="form_large-title ">

						<div className="row">
							<div className="col-md-8 text-left">

								<h2>Edit your team information</h2>

							</div>

							<div className="col-md-4">

								<p className="">
							        <button type='submit' className="btn-primary btn-lg btn-small-green max-width-280 pull-right-left" >Save Changes</button>
							    </p>

							</div>
						</div>

					</div>
					<div className="form_card_large">
						<div className=''>


							<div className='row'>

								<div className='col-sm-4'>
									<h3>Basic Information</h3>
									<p>Make sure to upload your Team photo so donors know it’s you : )</p>
								</div>

								<div className='col-sm-12 col-sm-8 settings_inputs '>
										
									<div className={this.state.errorMessageState}> 
											{single_error}
									</div>				
									<div className={'form-group ' + this.state.validationState.team_name}>
										<span className='help-block'> {this.state.helpBlock.team_name}</span>
										<input type='text' className='form-control ' ref="team_name" onChange={UpdateTeamActions.updateTeamName} value={this.state.team_name} placeholder="Team Name" autoFocus />
									</div>
									
									

									<div className={'form-group ' + this.state.validationState.team_type}>
										<span className='help-block'> {this.state.helpBlock.team_type}</span>
										<select className="form-control" ref="team_type" placeholder="Team Type"  onChange={UpdateTeamActions.updateTeamType}>
											<option value={this.state.team_type}>{this.state.team_type}</option>
											<option value="High School">High School</option>
											<option value="College/University">College/University</option>
											<option value="Community">Community</option>
											<option value="Business">Business</option>
											<option value="Religious Institution">Religious Institution</option>
										</select>
									</div>

									<div className={'form-group ' + this.state.validationState.color}>
										<span className='help-block'> {this.state.helpBlock.color}</span>

										<div className="color_input">
											Select color
											<div className="colorPicker_box">
												<ColorPicker color={this.state.color} alpha={100}  ref="color" placement="topRight" trigger={<span className='react-colorpicker-trigger colorBox-square'></span>}
												onChange={this.changeHandler}
									    	/>
									    	</div>
										</div>
									</div>
									<div className={this.state.validationState.goal}>
											<span className='help-block '>{this.state.helpBlock.goal}</span>
										</div>
										<div className={'goal_field form-group input-group ' + this.state.validationState.goal}>				
											
											<span className="input-group-addon dollar-addon">$</span>
											<input type='number' className='form-control' ref="goal" onChange={UpdateTeamActions.updateGoal}  value={this.state.goal} placeholder="enter your fundraising goal"/>
										</div>
										<div className={'form-group ' + this.state.validationState.about}>
											<span className='help-block'> {this.state.helpBlock.about}</span>
											<textarea className='form-control' ref="about" onChange={UpdateTeamActions.updateAbout} value={this.state.about} placeholder="In 340 characters, write a brief description of why YOU are fundraising."></textarea>
										</div>

										<div className={this.state.validationState.username}>
											<span className='help-block '>{this.state.helpBlock.username}</span>
										</div>
										<div className={'input-group form-group url_field ' + this.state.validationState.username}>	
												<span className="input-group-addon " id="basic-addon3">www.rescueteams.org/</span>
												<input type='text' className='form-control ' ref="username" onChange={UpdateTeamActions.updateUsername} value={this.state.username} placeholder="Username" aria-describedby="basic-addon3"/>
											
										</div>
										<div>
											<span className='help-block under_text '>Username must not contain spaces</span>
											
										</div>

										<input type="hidden" ref="uuid" value={this.state.uuid} />

								</div>
							</div>

							<div className='row input-padded-spacing'>

								<div className='col-sm-4'>
									<h3>Team Address</h3>
									
								</div>

								<div className='col-sm-12 col-sm-8 settings_inputs '>
										
												
									<div className={'form-group ' + this.state.validationState.address1}>
										<span className='help-block'> {this.state.helpBlock.address1}</span>
										<input type='text' className='form-control ' ref="team_name" onChange={UpdateTeamActions.updateAddress1} value={this.state.address1} placeholder="Street Address" autoFocus />
									</div>

									<div className='form-group '>
									
										<input type='text' className='form-control ' ref="team_name" onChange={UpdateTeamActions.updateAddress2} value={this.state.address2} placeholder="Address line 2" autoFocus />
									</div>

									<div className={'form-group ' + this.state.validationState.team_city}>
										<span className='help-block'> {this.state.helpBlock.team_city}</span>
										<input type='text' className='form-control ' ref="team_name" onChange={UpdateTeamActions.updateTeamCity} value={this.state.team_city} placeholder="City" autoFocus />
									</div>

									<div className={'form-group ' + this.state.validationState.team_state}>
										<span className='help-block'> {this.state.helpBlock.team_state}</span>
										<input type='text' className='form-control ' ref="team_name" onChange={UpdateTeamActions.updateTeamState} value={this.state.team_state} placeholder="State" autoFocus />
									</div>

									<div className={'form-group ' + this.state.validationState.zipcode}>
										<span className='help-block'> {this.state.helpBlock.zipcode}</span>
										<input type='number' className='form-control ' ref="team_name" onChange={UpdateTeamActions.updateZipCode} value={this.state.zipcode} placeholder="Postal Code" autoFocus />
									</div>
									

									<div className={'form-group ' + this.state.validationState.country}>
										<span className='help-block'> {this.state.helpBlock.country}</span>
										<input type='text' className='form-control ' ref="team_name" onChange={UpdateTeamActions.updateCountry} value={this.state.country} placeholder="Country" autoFocus />
									</div>

								</div>
							</div>
						</div>		
					</div>

					<div className="form_large-title ">

						<div className="row">
							<div className="col-md-8 text-left">

								<h2></h2>

							</div>

							<div className="col-md-4">

								<p className="">
							        <button type='submit' className="btn-primary btn-lg btn-small-green max-width-280 pull-right" >Save Changes</button>
							    </p>

							</div>
						</div>

					</div>
					<div className="form_card_transparant">
						<div className='text-left'>

							<div className="row">
								<div className='col-sm-12'>
									
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>

		);
	}
});