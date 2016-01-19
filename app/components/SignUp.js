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
		var password_conf = this.state.password_conf;

		var user = {
								username: this.state.username.trim(),
								password: this.state.password,
								password_conf: this.state.password_conf
		}
		
		if (!username) {
			this.refs.username.focus();
		}

		if (!password) {
			this.refs.password.focus();
		}

		if (!password_conf) {
			this.refs.password_conf.focus();
		}

		if (username && password) {
			SignUpActions.signUp(user);
		}
	}

	render() {

		return (
			<div className='container signup'>
				<div className='row'>
					<h3 className='text-center'>Sign Up</h3>
					<p>This form would create a member page and would then redirect them to their page when completed.</p>
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
							<input type='text' className='form-control' ref="username"  onChange={SignUpActions.updateUsername}  />
						</div>
						<div className='form-group'>
							<label className='control-label'>Email</label>
							<input type='text' className='form-control' ref="email" />
						</div>
						<div className='form-group'>
							<label className='control-label'>Password</label>
							<input type='password' className='form-control' ref="password"  onChange={SignUpActions.updatePassword} />
						</div>
						<div className='form-group'>
							<label className='control-label'>Password Confirmation</label>
							<input type='password' className='form-control' ref="password_conf"  onChange={SignUpActions.updatePasswordConf}/>
						</div>
						<p className='text-center'><button type='submit' className='btn btn-lg btn-success'>Submit</button></p>
					</form>
				</div>
			</div>
		);
	}
}

export default SignUp;