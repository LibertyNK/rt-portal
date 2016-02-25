import React from 'react';
import {Link} from 'react-router';
import LogInStore from '../stores/LogInStore';
import LogInActions from '../actions/LogInActions';
import Auth from '../services/auth';



class LogIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = LogInStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		LogInStore.listen(this.onChange);
	}

	componentWillUnmount() {
		LogInStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();

		var email = this.state.email;
    	var password = this.state.password;

		if (!email) {
			// LogInActions.invalidemail();
			this.refs.email.focus();
			LogInActions.invalidEmail();
		}

		if (!password) {
			this.refs.password.focus();
			LogInActions.invalidPassword();
		}

		if (email && password) {
			LogInActions.logIn(email, password);
		}
	}

	render() {


		let error_message = this.state.errorMessage;
		let error_message_class = this.state.errorMessageState;

		return (
			<div className="pre_head_padding">
				<div className="map_background">
				</div>
					<div className="form_card">
						<div className='text-left'>
							<div className="row">
								<div className='col-sm-12'>
									<h2>Log In</h2>
								</div>
							</div>

							<div className="row">
								<div className='col-sm-12'>
									<div className="banner-border-seperation"></div>
								</div>
							</div>
							<div className='row settings_inputs'>
								<form onSubmit={this.handleSubmit.bind(this)}>
									<div className={'form-group ' + this.state.validationState.email}>
										<span className='help-block'> {this.state.helpBlock.email}</span>							
										<input type='text' className={'form-control ' + this.state.inputBackground } ref="email" placeholder="Email" onChange={LogInActions.updateEmail} required/>
									</div>
									<div className={'form-group ' + this.state.validationState.password}>
										<span className='help-block'> {this.state.helpBlock.password}</span>							
										<input type='password' className={'form-control ' + this.state.inputBackground }  ref="password" onChange={LogInActions.updatePassword} placeholder="Password" required/>
									</div>
									<span className={ error_message_class }>{ error_message }</span>
									
									<p className='text-center'><button type='submit' className='btn btn-lg btn btn-large red-btn width_100 btn_color'>Submit <span className="glyphicon glyphicon-chevron-right arrow-right" aria-hidden="true"></span></button></p>
								</form>
							</div>
						</div>
					</div>
					<div className="form_card_transparant">
						<div className='text-left'>

							<div className="row">
								<div className='col-sm-12'>
									<h3>Stuck? <a href="#">Try resetting your password.</a></h3>
									<h3>Not a member yet? <Link to='/signup'>Sign up here!</Link></h3>
								</div>
							</div>
						</div>
					</div>
				</div>



		);
	}
}

export default LogIn;