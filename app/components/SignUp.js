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

		var username = this.state.username.trim();
		var password = this.state.password;

		if (!username) {
			this.refs.username.focus();
		}

		if (!password) {
			this.refs.password.focus();
		}

		if (username && password) {
			SignUpActions.signUp(username, password);
		}
	}

	render() {

		return (
			<div className='container signup'>
				<div className='row'>
					<h3 className='text-center'>Sign Up</h3>
					<form onSubmit={this.handleSubmit.bind(this)}>						
						<div className='form-group'>
							<label className='control-label'>First Name</label>
							<input type='text' className='form-control' ref="firstname" autoFocus required />
						</div>
						<div className='form-group'>
							<label className='control-label'>Last Name</label>
							<input type='text' className='form-control' ref="lastname" required />
						</div>
						<div className='form-group'>
							<label className='control-label'>Username</label>
							<input type='text' className='form-control' ref="username"  onChange={SignUpActions.updateUsername} required />
						</div>
						<div className='form-group'>
							<label className='control-label'>Email</label>
							<input type='text' className='form-control' ref="email" required />
						</div>
						<div className='form-group'>
							<label className='control-label'>Password</label>
							<input type='password' className='form-control' ref="password"  onChange={SignUpActions.updatePassword} required />
						</div>
						<div className='form-group'>
							<label className='control-label'>Password Confirmation</label>
							<input type='password' className='form-control' ref="password2" required />
						</div>
						<p className='text-center'><button type='submit' className='btn btn-lg btn-success'>Submit</button></p>
					</form>
				</div>
			</div>
		);
	}
}

export default SignUp;