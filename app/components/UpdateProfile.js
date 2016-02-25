import React from 'react';
import {Link} from 'react-router';
import UpdateProfileActions from '../actions/UpdateProfileActions';
import UpdateProfileStore from '../stores/UpdateProfileStore';
import ApiUtils from '../utils/apiUtils';
import CurrentUserStore from '../stores/CurrentUserStore';

var _ = require('underscore');


class UpdateProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = UpdateProfileStore.getState();
		this.onChange = this.onChange.bind(this);
		this._load = this._load.bind(this);
	}

	componentDidMount(){
		UpdateProfileStore.listen(this.onChange);
		this._load();
	}

	componentWillUnmount(){
		UpdateProfileStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}


	_load() {
	 	ApiUtils.findUser("flash")
	 		.done((data) => {
	 			this.setState(data.user);
	 	})
	 	.fail((jqXhr) => {

	 		console.log('Error Message from server: ');
	 	});	
	}

	handleSubmit(event) {
		event.preventDefault();

		var user = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			username: this.state.username,
			email: this.state.email.trim(),
			password: this.state.password,
			password_conf: this.state.password_conf,
			goal: this.state.goal,
			about: this.state.about
		}
		//Initial form validation

		if (!user.first_name) {
			this.refs.first_name.focus();
			UpdateProfileActions.invalidFirstName();
		}

		if (!user.last_name) {
			this.refs.last_name.focus();
			UpdateProfileActions.invalidLastName();
		}

		if (!user.username) {
			this.refs.username.focus();
			UpdateProfileActions.invalidUsername();
		}
		

		if (user.username) {
			this.refs.username.focus();
			UpdateProfileActions.invalidUsername();
		}

		if(user.username.match(/\s/g)){
			this.refs.username.focus();
			UpdateProfileActions.invalidUsernameSpace();

		}
		
		if (!user.email) {
			this.refs.email.focus();
			UpdateProfileActions.invalidEmail();
		}

		if (!user.password) {
			this.refs.password.focus();
			UpdateProfileActions.invalidPassword();
		}

		if (user.password.length < 6) {
			this.refs.password.focus();
			UpdateProfileActions.invalidPasswordLength();
		}

		if (!user.password_conf) {
			this.refs.password_conf.focus();
			UpdateProfileActions.invalidPasswordConf();
		}

		if (user.password_conf !== user.password) {
			UpdateProfileActions.unmatchPasswords();
		}

		if (!user.goal) {
			this.refs.goal.focus();
			UpdateProfileActions.invalidGoal();
		}

		if (user.username && user.password) {
			UpdateProfileActions.signUp(user);
		}
	}


	render() {
		var errors = this.state.errorMessage || [];

		var single_error = errors.map(function (err, key) { return <p key = {key}> {err} </p> });


		return (

			<div className="pre_head_padding">
				<div className="map_background">
				</div>
				<div className="form_card_large">
					<div className=''>
						<div className="row">
							<div className='col-sm-12'>
								<h2>Edit Your Profile</h2>
							</div>
						</div>

						<div className="row">
							<div className='col-sm-12'>
								<div className="banner-border-seperation"></div>
								<h4>To sign up as a fundraisier, you’ll need to create your own rescue campagin page first. You can join or start a team later.</h4>
							</div>
						</div>
						<div className='row'>

							<div className='col-sm-12 settings_inputs'>
								<form onSubmit={this.handleSubmit.bind(this)}>		
									<div className={this.state.errorMessageState}> 
										{single_error}
								   </div>				
									<div className={'form-group__half first_input form-group ' + this.state.validationState.first_name}>
										<span className='help-block'> {this.state.helpBlock.first_name}</span>
										<input type='text' className='form-control ' ref="first_name" onChange={UpdateProfileActions.updateFirstName} value={this.state.first_name} placeholder="First Name" autoFocus />
									</div>
									<div className={'form-group__half form-group ' + this.state.validationState.last_name}>								
										<span className='help-block'> {this.state.helpBlock.last_name}</span>
										<input type='text' className='form-control' ref="last_name" onChange={UpdateProfileActions.updateLastName} value={this.state.last_name} placeholder="Last Name"/>
									</div>

									
									<div className={'form-group ' }>								
									
										<input type='text' className='form-control' ref="email" value={this.state.email} placeholder="Email" readOnly/>
									</div>
									<div className={this.state.validationState.username}>
										<span className='help-block '>{this.state.helpBlock.username}</span>
									</div>
									<div className={'input-group form-group url_field ' + this.state.validationState.username}>	
											<span className="input-group-addon " id="basic-addon3">www.rescueteams.org/</span>
											<input type='text' className='form-control ' ref="username" onChange={UpdateProfileActions.updateUsername} value={this.state.username} placeholder="Username" aria-describedby="basic-addon3"/>
										
									</div>
									<div>
										<span className='help-block under_text '>Username must not contain spaces</span>
										
									</div>
									<div className="input-padded-spacing">
										<div className={'input-top-spacing form-group ' + this.state.validationState.password + ' ' + this.state.validationState.password_length + ' '  + this.state.validationState.matching_passwords}>							
											<span className='help-block'> {this.state.helpBlock.password}</span>
											<span className='help-block'> {this.state.helpBlock.password_length}</span>
											<span className='help-block'> {this.state.helpBlock.matching_passwords}</span>
											<input type='password' className='form-control' ref="password"  onChange={UpdateProfileActions.updatePassword} placeholder="Current Password"/>
										</div>
										<div className={'form-group ' + this.state.validationState.password_conf}>								
											<span className='help-block'> {this.state.helpBlock.password_conf}</span>
											<input type='password' className='form-control' ref="password_conf"  onChange={UpdateProfileActions.updatePasswordConf}   placeholder="New Password"/>
										</div>

										<div className={'form-group ' + this.state.validationState.password_conf}>								
											<span className='help-block'> {this.state.helpBlock.password_conf}</span>
											<input type='password' className='form-control' ref="password_conf"  onChange={UpdateProfileActions.updatePasswordConf}   placeholder="Confirm New Password"/>
										</div>
									</div>
									
									<div className="input-padded-spacing">
										<div className={this.state.validationState.goal}>
											<span className='help-block '>{this.state.helpBlock.goal}</span>
										</div>
										<div className={'goal_field form-group input-group ' + this.state.validationState.goal}>				
											
											<span className="input-group-addon dollar-addon">$</span>
											<input type='text' className='form-control' ref="goal" onChange={UpdateProfileActions.updateGoal}  value={this.state.goal} placeholder="enter your fundraising goal"/>
										</div>
										<div className={'form-group ' + this.state.validationState.about}>
											<span className='help-block'> {this.state.helpBlock.about}</span>
											<textarea className='form-control' ref="about" onChange={UpdateProfileActions.updateAbout} value={this.state.about} placeholder="In 340 characters, write a brief description of why YOU are fundraising."></textarea>
										</div>
									</div>
									<p className='text-left'><button type='submit' className='btn btn-large red-btn width_100 btn_color'>Update my page <span className="glyphicon glyphicon-chevron-right arrow-right" aria-hidden="true"></span></button></p>
								</form>
							</div>
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
			</div>

		);
	}
}

export default UpdateProfile;