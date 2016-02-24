import React from 'react';
import UpdateProfileActions from '../actions/UpdateProfileActions';
import UpdateProfileStore from '../stores/UpdateProfileStore';
import ApiUtils from '../utils/apiUtils';


class UpdateProfile extends React.Component {
	constructor(props) {
		super(props);
		this._load = this._load.bind(this);
		this.state = {first_name: '', last_name: '', goal: '', about: ''};
	}

	componentDidMount() {
		this._load();

	}

	_load() {
		console.log("loading?");
	 	ApiUtils.findUser(this.props.params.username)
	 		.done((data) => {
	 			this.setState(data.user);
	 	})
	 	.fail((jqXhr) => {

	 		console.log('Error Message from server: ');
	 	});	
	}

	render() {

		return (

			<div className="team_background">
				<div className="content_box"> 
					<div className="row buffer">
					</div>
				
					<div className="">
						<div className="col-md-12 profile_card">
							<div className='row'>
								
								<form >	
									<div className="row">

										<div className='col-sm-6 '>
											<label className='control-label'>Your Information</label>
										</div>
										<div className='col-sm-6 '>
											<p className='text-center width_100'><button type='submit' className='btn btn-lg btn-success'>Save Changes</button></p>
										</div>
									</div>

									<div className="row padding_20px">
										<div className='col-sm-6 settings_inputs'>

											
											<div className='form-group'>
												<input type='text' className='form-control' ref="first_name" placeholder="First Name" autoFocus />
											</div>

											<div className='form-group'>
												<input type='text' className='form-control' ref="last_name" placeholder="Last Name" autoFocus />
											</div>
											<div className='form-group'>
												<input type='email' className='form-control' ref="email" placeholder="Email" autoFocus />
											</div>


											<div className='form-group'>
												<input type='password' className='form-control' ref="email" placeholder="Current Password" autoFocus />
											</div>

											<div className='form-group'>
												<input type='password' className='form-control' ref="new_password" placeholder="New Password" autoFocus />
											</div>

											<div className='form-group'>
												<input type='password' className='form-control' ref="new_password" placeholder="Confirm Password" autoFocus />
											</div>
											<div className='form-group'>
												<input type='text' className='form-control' ref="new_password" placeholder="enter personal fundraising goal" autoFocus />
											</div>
											<div className={'form-group '}>
												<label className='control-label'>About You</label>
												<textarea className='form-control' ref="about" ></textarea>
											</div>
											
										</div>

										<div className='col-sm-6 settings_inputs'>	
											<label className='control-label'>Profile Image</label>
											<input type="file" name="fileToUpload" id="fileToUpload" />
											
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default UpdateProfile;