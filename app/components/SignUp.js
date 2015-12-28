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
			this.refs.username.getDOMNode().focus();
		}

		if (!password) {
			this.refs.password.getDOMNode().focus();
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
							<input type='text' className='form-control' ref="firstname" autoFocus />
						</div>
						<div className='form-group'>
							<label className='control-label'>Last Name</label>
							<input type='text' className='form-control' ref="lastname" />
						</div>
						<div className='form-group'>
							<label className='control-label'>Username</label>
							<input type='text' className='form-control' ref="username" value={this.state.username} onChange={SignUpActions.updateUsername} />
						</div>
						<div className='form-group'>
							<label className='control-label'>Email</label>
							<input type='text' className='form-control' ref="email" />
						</div>
						<div className='form-group'>
							<label className='control-label'>Password</label>
							<input type='password' className='form-control' ref="password" value={this.state.password} onChange={SignUpActions.updatePassword}/>
						</div>
						<div className='form-group'>
							<label className='control-label'>Password Confirmation</label>
							<input type='password' className='form-control' ref="password2" />
						</div>
						<button type='submit' className='btn btn-lg btn-primary'>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default SignUp;