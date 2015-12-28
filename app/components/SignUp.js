import React from 'react';

class SignUp extends React.Component {
	render() {

		return (
			<div className='container signup'>
				<div className='row'>
					<h3 className='text-center'>Sign Up</h3>
					<form>
						<div className='form-group'>
							<label className='control-label'>First Name</label>
							<input type='text' className='form-control' ref="firstname" autoFocus />
						</div>
						<div className='form-group'>
							<label className='control-label'>Last Name</label>
							<input type='text' className='form-control' ref="lastname" />
						</div>
						<div className='form-group'>
							<label className='control-label'>Email</label>
							<input type='text' className='form-control' ref="email" />
						</div>
						<div className='form-group'>
							<label className='control-label'>Password</label>
							<input type='password' className='form-control' ref="password" />
						</div>
						<button type='submit' className='btn btn-lg btn-primary'>Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

export default SignUp;