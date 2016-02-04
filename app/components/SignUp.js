import React from 'react';
import SignUpStore from '../stores/SignUpStore';
import SignUpActions from '../actions/SignUpActions';


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
			email: this.state.email.trim(),
			password: this.state.password,
			password_conf: this.state.password_conf
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

		if (user.email && user.password) {
			SignUpActions.signUp(user);

		}
	}

	render() {

		return (
		<div className="form_card">
			<div className=''>
				<div className="row">
					<div className='col-sm-12'>
						<h2>Woohoo! First step is to set up YOUR personal page, on the next step, you will join a team.</h2>
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
							<div className={this.state.errorMessageState}> 
								{this.state.errorMessage}
							</div>				
							<div className={'form-group ' + this.state.validationState.first_name}>
								<label className='control-label'>Your Information</label>
								<span className='help-block'> {this.state.helpBlock.first_name}</span>
								<input type='text' className='form-control' ref="first_name" onChange={SignUpActions.updateFirstName} placeholder="First Name" autoFocus />
							</div>
							<div className={'form-group ' + this.state.validationState.last_name}>
								
								<span className='help-block'> {this.state.helpBlock.last_name}</span>
								<input type='text' className='form-control' ref="last_name" onChange={SignUpActions.updateLastName} placeholder="Last Name"/>
							</div>
							<div className={'form-group ' + this.state.validationState.email}>
								
								<span className='help-block'> {this.state.helpBlock.email}</span>
								<input type='text' className='form-control' ref="email" onChange={SignUpActions.updateEmail}  placeholder="Email"/>
							</div>
							<div className={'form-group ' + this.state.validationState.password + ' ' + this.state.validationState.password_length + ' '  + this.state.validationState.matching_passwords}>
								
								<span className='help-block'> {this.state.helpBlock.password}</span>
								<span className='help-block'> {this.state.helpBlock.password_length}</span>
								<span className='help-block'> {this.state.helpBlock.matching_passwords}</span>
								<input type='password' className='form-control' ref="password"  onChange={SignUpActions.updatePassword} placeholder="Password"/>
							</div>
							<div className={'form-group ' + this.state.validationState.password_conf}>
								
								<span className='help-block'> {this.state.helpBlock.password_conf}</span>
								<input type='password' className='form-control' ref="password_conf"  onChange={SignUpActions.updatePasswordConf}  placeholder="Confirm Password"/>
							</div>
							<p className='text-left'><button type='submit' className='btn btn-large red-btn width_100 btn_color'>Submit</button></p>
						</form>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default SignUp;