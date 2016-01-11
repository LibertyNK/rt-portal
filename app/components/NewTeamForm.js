import React from 'react';

class NewTeamForm extends React.Component {
	render() {

		return (
			<div className='container signup'>
				<div className='alert alert-success text-center'>
					<p>New Teaam Form page</p>
				</div>

				<form >						
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
						<input type='text' className='form-control' ref="username"/>
					</div>
					<div className='form-group'>
						<label className='control-label'>Email</label>
						<input type='text' className='form-control' ref="email" />
					</div>
					<div className='form-group'>
						<label className='control-label'>Password</label>
						<input type='password' className='form-control' ref="password"  />
					</div>
					<div className='form-group'>
						<label className='control-label'>Password Confirmation</label>
						<input type='password' className='form-control' ref="password2" />
					</div>
					<p className='text-center'><button type='submit' className='btn btn-lg btn-success'>Submit</button></p>
				</form>
			</div>
		);
	}
}

export default NewTeamForm;