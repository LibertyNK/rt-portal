import React from 'react';
import UpdateTeamActions from '../actions/UpdateTeamActions';
import UpdateTeamStore from '../stores/UpdateTeamStore';


class UpdateTeam extends React.Component {

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
											<label className='control-label'>Team Information</label>
										</div>
										<div className='col-sm-6 '>
											<p className='text-center width_100'><button type='submit' className='btn btn-lg btn-success'>Save Changes</button></p>
										</div>
									</div>

									<div className="row padding_20px">
										<div className='col-sm-6 settings_inputs'>

											<div className='form-group'>
												<select class="form-control">
													<option value="">What type of team are you</option>
													<option value="team_id">Team 1</option>
													<option value="team_id">Team 1</option>
													<option value="team_id">Team 2</option>
													<option value="team_id">Team 3</option>
													<option value="team_id">Team 4</option>
													<option value="team_id">Team 5</option>
												</select>
											</div>

											<div className='form-group'>
												<input type='text' className='form-control' ref="teamn_ame" placeholder="Team Name" autoFocus />
											</div>
											<div className='form-group'>
												<input type='text' className='form-control' ref="teamn_name" placeholder="Team Goal" autoFocus />
											</div>
											<div className={'form-group '}>
												<label className='control-label'>About Your Team</label>
												<textarea className='form-control' ref="about" ></textarea>
											</div>
											
										</div>

										<div className='col-sm-6 settings_inputs'>	
											<div className='form-group'>
												<input type='text' className='form-control' ref="street" placeholder="Team Street Address"/>
											</div>
											<div className='form-group'>
												<input type='text' className='form-control' ref="address" placeholder="Team Street Address #2"/>
											</div>
											<div className='form-group'>
												<input type='text' className='form-control' ref="teamState" placeholder="State (etc: CA)"/>
											</div>
											<div className='form-group'>
												<input type='number' className='form-control' ref="teamZip" placeholder="Zip (etc: 46514)"/>
											</div>


											<label className='control-label'>Team Banner</label>
											<input type="file" name="fileToUpload" id="fileToUpload" />

											<label className='control-label'>Team Logo</label>
											<input type="file" name="fileToUpload" id="fileToUpload" />
											
										</div>
									</div>
								</form>
							</div>
						</div>

						<div className="col-md-12 profile_card">
							<div className='row'>
								
								<form >	
									<div className='col-sm-6 '>
										<label className='control-label'>Team Members (3)</label>
									</div>
									<div className='col-sm-6 '>
										<p className='text-center width_100'><button type='submit' className='btn btn-lg btn-success'>Save Changes</button></p>
									</div>

									<div className='col-sm-12 settings_inputs'>

										<div className="row padding_20px">

											<div className='col-sm-4 settings_inputs'>

												<h2>Nico Leonard</h2>
												<h4>Email</h4>
												<h4>Phone</h4>
												<h4>Member Since ...</h4>
											</div>

											<div className='col-sm-4 settings_inputs'>

												<h3>$0.00</h3>
											</div>

											<div className='col-sm-4 settings_inputs'>

												<div className='form-group'>
													<select class="form-control">
														<option value="">Admin</option>
														<option value="team_id">Member</option>
													</select>
												</div>
											</div>
										</div>
										<div className="row padding_20px">

											<div className='col-sm-4 settings_inputs'>

												<h2>Nico Leonard</h2>
												<h4>Email</h4>
												<h4>Phone</h4>
												<h4>Member Since ...</h4>
											</div>

											<div className='col-sm-4 settings_inputs'>

												<h3>$0.00</h3>
											</div>

											<div className='col-sm-4 settings_inputs'>

												<div className='form-group'>
													<select class="form-control">
														<option value="">Admin</option>
														<option value="team_id">Member</option>
													</select>
												</div>
											</div>
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

export default UpdateTeam;