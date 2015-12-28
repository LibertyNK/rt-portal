import React from 'react';
import {Link} from 'react-router';
import LogInStore from '../stores/LogInStore';
import LogInActions from '../actions/LogInActions';


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
			// LogInActions.invalidEmail();
			this.refs.email.focus();
		}

		if (!password) {
			// LogInActions.invalidPassword();
		}

		if (email && password) {
			// LogInActions.logIn(email, password);
			console.log('has email and password ' + email);
		}
	}

	render() {

		return (
			<div className='container login'>
				<div className='row'>
					<h3 className='text-center'>Log In</h3>
					<form onSubmit={this.handleSubmit.bind(this)}>
						<div className='form-group'>
							<label className='control-label'>Email</label>
							<input type='text' className='form-control' ref="email" autoFocus />
						</div>
						<div className='form-group'>
							<label className='control-label'>Password</label>
							<input type='password' className='form-control' ref="password" onChange={LogInActions.updatePassword} />
						</div>
						<button type='submit' className='btn btn-lg btn-primary'>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default LogIn;