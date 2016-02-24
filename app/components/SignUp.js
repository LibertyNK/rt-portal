import React from 'react';
import SignUpStore from '../stores/SignUpStore';
import SignUpActions from '../actions/SignUpActions';
import CurrentUserStore from '../stores/CurrentUserStore';

var _ = require('underscore');


class SignUp extends React.Component {

	constructor(props) {
		super(props);
		this.state = SignUpStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
		SignUpStore.listen(this.onChange);
	}

	componentWillUnmount(){
		SignUpStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
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
			SignUpActions.invalidFirstName();
		}

		if (!user.last_name) {
			this.refs.last_name.focus();
			SignUpActions.invalidLastName();
		}

		if (!user.username) {
			this.refs.username.focus();
			SignUpActions.invalidUsername();
		}
		

		if (user.username) {
			this.refs.username.focus();
			SignUpActions.invalidUsername();
		}

		if(user.username.match(/\s/g)){
			this.refs.username.focus();
			SignUpActions.invalidUsernameSpace();

		}
		
		if (!user.email) {
			this.refs.email.focus();
			SignUpActions.invalidEmail();
		}

		if (!user.password) {
			this.refs.password.focus();
			SignUpActions.invalidPassword();
		}

		if (user.password.length < 6) {
			this.refs.password.focus();
			SignUpActions.invalidPasswordLength();
		}

		if (!user.password_conf) {
			this.refs.password_conf.focus();
			SignUpActions.invalidPasswordConf();
		}

		if (user.password_conf !== user.password) {
			SignUpActions.unmatchPasswords();
		}

		if (!user.goal) {
			this.refs.goal.focus();
			SignUpActions.invalidGoal();
		}

		if (user.username && user.password) {
			SignUpActions.signUp(user);
		}
	}

	render() {

		var errors = this.state.errorMessage || [];

		var single_error = errors.map(function (err, key) { return <p key = {key}> {err} </p> });


		return (
			<div className="pre_head_padding">
				<div className="map_background">
					<div className="form_card">
						<div className=''>
							<div className="row">
								<div className='col-sm-12'>
									<h2>Create your own Rescue Campaign page</h2>
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
											<input type='text' className='form-control ' ref="first_name" onChange={SignUpActions.updateFirstName} placeholder="First Name" autoFocus />
										</div>
										<div className={'form-group__half form-group ' + this.state.validationState.last_name}>								
											<span className='help-block'> {this.state.helpBlock.last_name}</span>
											<input type='text' className='form-control' ref="last_name" onChange={SignUpActions.updateLastName} placeholder="Last Name"/>
										</div>

										
										<div className={'form-group ' + this.state.validationState.email}>								
											<span className='help-block'> {this.state.helpBlock.email}</span>
											<input type='text' className='form-control' ref="email" onChange={SignUpActions.updateEmail}  placeholder="Email"/>
										</div>
										<div className={this.state.validationState.username}>
											<span className='help-block '>{this.state.helpBlock.username}</span>
										</div>
										<div className={'input-group form-group url_field ' + this.state.validationState.username}>	
												<span className="input-group-addon " id="basic-addon3">www.rescueteams.org/</span>
												<input type='text' className='form-control ' ref="username" onChange={SignUpActions.updateUsername} placeholder="Username" aria-describedby="basic-addon3"/>
											
										</div>
										<div>
											<span className='help-block under_text '>Username must not contain spaces</span>
											
										</div>
										<div className="input-padded-spacing">
											<div className={'input-top-spacing form-group ' + this.state.validationState.password + ' ' + this.state.validationState.password_length + ' '  + this.state.validationState.matching_passwords}>							
												<span className='help-block'> {this.state.helpBlock.password}</span>
												<span className='help-block'> {this.state.helpBlock.password_length}</span>
												<span className='help-block'> {this.state.helpBlock.matching_passwords}</span>
												<input type='password' className='form-control' ref="password"  onChange={SignUpActions.updatePassword} placeholder="Password"/>
											</div>
											<div className={'form-group ' + this.state.validationState.password_conf}>								
												<span className='help-block'> {this.state.helpBlock.password_conf}</span>
												<input type='password' className='form-control' ref="password_conf"  onChange={SignUpActions.updatePasswordConf}  placeholder="Confirm Password"/>
											</div>
										</div>
										
										<div className="input-padded-spacing">
											<div className={this.state.validationState.goal}>
												<span className='help-block '>{this.state.helpBlock.goal}</span>
											</div>
											<div className={'goal_field form-group input-group ' + this.state.validationState.goal}>				
												
												<span className="input-group-addon dollar-addon">$</span>
												<input type='text' className='form-control' ref="goal" onChange={SignUpActions.updateGoal}  placeholder="enter your fundraising goal"/>
											</div>
											<div className={'form-group ' + this.state.validationState.about}>
												<span className='help-block'> {this.state.helpBlock.about}</span>
												<textarea className='form-control' ref="about" onChange={SignUpActions.updateAbout} placeholder="In 140 characters, write a brief description of why YOU are fundraising."></textarea>
											</div>
										</div>
										<p className='text-left'><button type='submit' className='btn btn-large red-btn width_100 btn_color'>Create my page <span className="glyphicon glyphicon-chevron-right arrow-right" aria-hidden="true"></span></button></p>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp;