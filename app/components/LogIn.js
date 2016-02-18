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
			// LogInActions.invalidemail();
			this.refs.email.focus();
		}

		if (!password) {
			this.refs.password.focus();
		}

		if (email && password) {
			console.log(this.state.jwt);
			// LogInActions.logIn(email, password);
		}

		console.log(this.state.jwt);
	}

	render() {

		return (
	<div>
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
						<div className='form-group'>
							
							<input type='text' className='form-control' ref="email" placeholder="Email" onChange={LogInActions.updateEmail} />
						</div>
						<div className='form-group'>
							
							<input type='password' className='form-control' ref="password" onChange={LogInActions.updatePassword} placeholder="Password"/>
						</div>
						<p className='text-center'><button type='submit' className='btn btn-lg btn-success'>Submit</button></p>
					</form>
				</div>
			</div>
		</div>
		<div className="form_card_transparant">
			<div className='text-left'>

				<div className="row">
					<div className='col-sm-12'>
						<h3>Stuck? <a href="#">Try resetting your password.</a></h3>
						<h3>Not a member yet? <Link to='/add_team'>Sign up here!</Link></h3>
					</div>
				</div>
			</div>
		</div>
	</div>
		);
	}
}

export default LogIn;