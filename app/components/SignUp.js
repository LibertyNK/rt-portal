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
		}

		if (!user.last_name) {
			this.refs.last_name.focus();
		}
		
		if (!user.email) {
			this.refs.email.focus();
		}

		if (!user.password) {
			this.refs.password.focus();
		}

		if (!user.password_conf) {
			this.refs.password_conf.focus();
		}

		if (user.email && user.password) {
			SignUpActions.signUp(user);
		}
	}

	render() {

		return (
			<div className='container signup'>
				<div className='row'>
					<h3 className='text-center'>Sign Up Form Here</h3>
					<p>This form would create a member page and would then redirect them to their page when completed.</p>
					<form onSubmit={this.handleSubmit.bind(this)}>						
						<div className='form-group'>
							<label className='control-label'>First Name</label>
							<input type='text' className='form-control' ref="first_name" onChange={SignUpActions.updateFirstName} autoFocus />
						</div>
						<div className='form-group'>
							<label className='control-label'>Last Name</label>
							<input type='text' className='form-control' ref="last_name" onChange={SignUpActions.updateLastName} />
						</div>
						<div className='form-group'>
							<label className='control-label'>Email</label>
							<input type='text' className='form-control' ref="email" onChange={SignUpActions.updateEmail} />
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