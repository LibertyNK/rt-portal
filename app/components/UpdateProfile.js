import React from 'react';
import {Link} from 'react-router';
import ApiUtils from '../utils/apiUtils';
import UpdateProfileActions from '../actions/UpdateProfileActions';
import UpdateProfileStore from '../stores/UpdateProfileStore';
import CurrentUserStore from '../stores/CurrentUserStore';
import AuthenticatedComponent from '../decorators/AuthenticatedComponent';

var _ = require('underscore');
var ReactS3Uploader = require('react-s3-uploader');

export default AuthenticatedComponent (class UpdateProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = UpdateProfileStore.getState();
		this.onChange = this.onChange.bind(this);
		this._load = this._load.bind(this);
	}

	componentDidMount(){
		UpdateProfileStore.listen(this.onChange);
		this._load();
	}

	componentWillUnmount(){
		UpdateProfileStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}


	_load() {
	 	ApiUtils.findUser(this.props.user.username)
	 		.done((data) => {
	 			console.log(data);
	 			this.setState(data.user);
	 			this.usernameCheck = data.user.username;
	 	})
	 	.fail((jqXhr) => {

	 		console.log('Error Message from server: ' + jqXhr.message);
	 	});	

	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state.uuid);
		var user = {
			first_name: this.state.first_name,
			last_name: this.state.last_name,
			username: this.state.username,
			email: this.state.email.trim(),
			goal: this.state.goal,
			about: this.state.about,
			uuid: this.state.uuid
		}
		//Initial form validation


	
		if (!this.state.first_name || !this.state.first_name === '' || !this.state.last_name || !this.state.last_name === '' || !this.state.username || !this.state.username === '' || !this.state.goal || !this.state.goal === '' || !this.state.about || !this.state.about === '') {
            

	        if (!user.first_name) {
				this.refs.first_name.focus();
				UpdateProfileActions.invalidFirstName();
			}

			if (!user.last_name) {
				this.refs.last_name.focus();
				UpdateProfileActions.invalidLastName();
			}

			if (!user.username) {
				this.refs.username.focus();
				UpdateProfileActions.invalidUsername();
			}

			
			if (!user.email) {
				this.refs.email.focus();
				UpdateProfileActions.invalidEmail();
			}


			if (!user.goal) {
				this.refs.goal.focus();
				UpdateProfileActions.invalidGoal();
			}

			return
        }

        else {

        	if(this.usernameCheck !== user.username) {
        		if(user.username.match(/\s/g)){
					this.refs.username.focus();
					UpdateProfileActions.invalidUsernameSpace();
					return;
				}

				else {
					UpdateProfileActions.update(user);
				}
			}

			else {
				UpdateProfileActions.update(user);
			}
        }
	}


	render() {
		var errors = this.state.errorMessage || [];

		var single_error = errors.map(function (err, key) { return <p key = {key}> {err} </p> });
		return (

			<div className="pre_head_padding">
				<div className="map_background">
				</div>
				
				<form className="margin-ten-percent-top" onSubmit={this.handleSubmit.bind(this)}>	

					<div className="form_large-title ">

						<div className="row">
							<div className="col-md-8 text-left">

								<h2>Edit your campaign page</h2>

							</div>

							<div className="col-md-4">

								<p className="">
							        <button type='submit' className="btn-primary btn-lg btn-small-green max-width-280 pull-right-left" >Save Changes</button>
							    </p>

							</div>
						</div>

					</div>
					<div className="form_card_large">
						<div className=''>

							<img id="preview" />
							<div className='row'>
					

								<div className='col-sm-4'>
									<h3>Your Information</h3>
									<p>Make sure to uppload your profile photo so donors know it’s you : )
										<br />&nbsp;<br />

										Your email is locked here, because this is your user name for this account and is uneditable. 
										<br />&nbsp;<br />
										Your email and phone number are ONLY viewable to your team members, if you are fundraising on a team.</p>
								</div>

								<div className='col-sm-12 col-sm-8 settings_inputs margin-top-30px'>
										
									<div className={this.state.errorMessageState}> 
											{single_error}
									</div>				
									<div className={'form-group ' }>								
										<input type='file' className='form-control' ref="avatar_input" placeholder="Avatar" onChange={UpdateProfileActions.uploadAvatar} />
									</div>
									<div className={'form-group__half first_input form-group ' + this.state.validationState.first_name}>
										<span className='help-block'> {this.state.helpBlock.first_name}</span>
										<input type='text' className='form-control ' ref="first_name" onChange={UpdateProfileActions.updateFirstName} value={this.state.first_name} placeholder="First Name" autoFocus />
									</div>
									<div className={'form-group__half form-group ' + this.state.validationState.last_name}>								
										<span className='help-block'> {this.state.helpBlock.last_name}</span>
										<input type='text' className='form-control' ref="last_name" onChange={UpdateProfileActions.updateLastName} value={this.state.last_name} placeholder="Last Name"/>
									</div>
										
									<div className={'form-group ' }>								
										<input type='text' className='form-control' ref="email" value={this.state.email} placeholder="Email" readOnly/>
									</div>
									
								</div>
							</div>

							<div className='row input-padded-spacing'>

								<div className='col-sm-4'>
									<h3>Your Rescue Campaign</h3>
									<p>Make sure to uppload your profile photo so donors know it’s you : )
										<br />&nbsp;<br />
										Your email is locked here, becuase this is your user name for this account and is uneditable. 
										<br />&nbsp;<br />
										Your email and phone number are ONLY viewable to your team members, if you are fundraising on a team.</p>
								</div>

								<div className='col-sm-12 col-sm-8 settings_inputs'>
									
									<div className="">
										<div className={this.state.validationState.goal}>
											<span className='help-block '>{this.state.helpBlock.goal}</span>
										</div>
										<div className={'goal_field form-group input-group ' + this.state.validationState.goal}>				
											
											<span className="input-group-addon dollar-addon">$</span>
											<input type='number' className='form-control' ref="goal" onChange={UpdateProfileActions.updateGoal}  value={this.state.goal} placeholder="enter your fundraising goal"/>
										</div>
										<div className={'form-group ' + this.state.validationState.about}>
											<span className='help-block'> {this.state.helpBlock.about}</span>
											<textarea className='form-control' ref="about" onChange={UpdateProfileActions.updateAbout} value={this.state.about} placeholder="In 340 characters, write a brief description of why YOU are fundraising."></textarea>
										</div>

										<div className={this.state.validationState.username}>
											<span className='help-block '>{this.state.helpBlock.username}</span>
										</div>
										<div className={'input-group form-group url_field ' + this.state.validationState.username}>	
												<span className="input-group-addon " id="basic-addon3">www.rescueteams.org/</span>
												<input type='text' className='form-control ' ref="username" onChange={UpdateProfileActions.updateUsername} value={this.state.username} placeholder="Username" aria-describedby="basic-addon3"/>
											
										</div>
										<div>
											<span className='help-block under_text '>Username must not contain spaces</span>
											
										</div>

										<input type="hidden" ref="uuid" value={this.state.uuid} />
									</div>
										
								</div>

							</div>

							<div className='row input-padded-spacing'>

								<div className='col-sm-4'>
									<h3>Your Team Affiliation</h3>
									<p>You are fundraising independantly.
										<br />&nbsp;<br />
										f you would like to continue to fundraise independtly (without joing a team), Your fundraising totals will still be added to our collective goal and totals.
										<br />&nbsp;<br />
										We highly recommend you either join a team or start your own. We believe in teamwork : ) </p>
								</div>

								<div className='col-sm-12 col-sm-8 settings_inputs margin-top-30px'>
									
									<div className="">
										<div className={'form-group ' }>								
											<input type='text' className='form-control' ref="team_name" value={this.state.team_name} placeholder="General Funraising Team" readOnly/>
										</div>

										<span className="">
									        <Link to="join-team" ><button className="btn-primary btn-lg btn-small-grey max-width-380 pull-right" ><span className="glyphicon glyphicon-flag"></span>  Join a team</button></Link>
									    </span>

										<span className="margin-left-10px">

									         <Link to="start-team" ><button className="btn-primary btn-lg btn-small-grey max-width-380 pull-right" ><span className="glyphicon glyphicon-plus"></span>  Start your own team</button></Link>
									    </span>

										
									</div>
										
									
								</div>


							</div>
						</div>
					</div>

					<div className="form_large-title ">

						<div className="row">
							<div className="col-md-8 text-left">

								<h2></h2>

							</div>

							<div className="col-md-4">

								<p className="">
							        <button type='submit' className="btn-primary btn-lg btn-small-green max-width-280 pull-right" >Save Changes</button>
							    </p>

							</div>
						</div>

					</div>
					<div className="form_card_transparant">
						<div className='text-left'>

							<div className="row">
								<div className='col-sm-12'>
									
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>

		);
	}
});