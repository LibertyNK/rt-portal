import React from 'react';
import { Link } from 'react-router'
import ApiUtils from '../utils/apiUtils';
import AuthenticatedComponent from '../decorators/AuthenticatedComponent';
import {LOGIN_USER, LOGOUT_USER} from '../constants/ActionTypes';


export default AuthenticatedComponent(class Profile extends React.Component {
	constructor(props) {
		super(props);
		this._load = this._load.bind(this);
		this._compareUsername = this._compareUsername.bind(this);
		this.state = {first_name: '', last_name: '', goal: '', about: '', team_uuid: ''};
		this._getTeam = this._getTeam.bind(this);

	}

	componentDidMount() {
		this._load();
		this._compareUsername();
	}


	_compareUsername() {
		if (this.props.user.username === this.props.params.username) {
			return this.userlogged = true;
		}
		else {
			return this.userlogged = false;
		}
	}

	_load() {

	 	ApiUtils.findUser(this.props.params.username)
	 		.done((data) => {
	 			this.setState(data.user);

	 			if (data.user.team_uuid === null) {
	 				this.setState({team_name: 'General Fundraiser'});
	 			}
	 			else {
	 				this._getTeam();
	 			}

	 	})
	 	.fail((jqXhr) => {
	 		console.log('Error Message from server: '+ jqXhr.responseJSON.message);
	 	});	
	}

	_getTeam() {
		ApiUtils.getTeam(this.state.team_uuid)
	 		.done((data) => {
	 			this.setState({team_username: data.team.username, team_name: data.team.team_name});

	 	})
	 	.fail((jqXhr) => {
	 		console.log('Error Message from server');
	 	});	

	}

	render() {



		var style = {
		    width: ((this.state.amount_raised / this.state.goal) * 100) + "%" 
		};

		return (
			<div className="">

				<div className="map_background">
				</div>


				<div className="profile_banner">
					{this.userlogged ? 
					<Link to='/update-profile'><div className="edit_buttons">Edit your page  <span className="glyphicon glyphicon-pencil"></span></div></Link>

					:

					null

					}

					<div className="container">
						<div className="row">
							<div className="col-md-8 text-center center-margin">

								
								<h2>NORTH KOREAN REFUGEES ARE IN URGENT NEED.</h2>

								<h4>WE CAN HELP.</h4>
							</div>
						
						</div>
					</div>
				</div>


				<div className="profile_box"> 

					<div className="profile_box_left">
						<div className="col-md-12 profile_card">
							<div className="row ">
								<div className="col-md-4">


								</div>

								<div className="col-md-4 profile_image">
									<img className="" src="img/profile_blank-1.png" />
								</div>

								<div className="col-md-4">
									
								</div>

							</div>

							<div className="row ">
								<div className="col-md-12 text-center">

									<h3>{this.state.first_name} {this.state.last_name}</h3>
									<h4>Member of <Link to={'/team/' + this.state.team_username} >{this.state.team_name}</Link></h4>

								</div>
							</div>

							<div className="row padding-top-space-30px">
								<div className="col-md-10 text-left center-box">

									<p>{this.state.about}</p>
									

								</div>
							</div>
						</div>




					</div>
					<div className="profile_box_right">


						<div className="col-md-12 profile_card">

							<div className="row">
								<div className="col-md-10 center-box text-center">
									<h4>Together we can give others the chance to live in safety and freedom. 100% of your donation will fund emergency refugee work.</h4>
								</div>
							</div>



							<div className="row">
								<div className="col-md-10 center-box padding-top-space-30px">
									<div className="thermometer">

										<div className="therm_progress" style={style}>
										</div>
									</div>	
								</div>
							</div>

							<div className="row ">
								<div className="col-md-10 center-box">
									<div className="col-md-6">
										<h3>${this.state.amount_raised}</h3>
										<h5>raised</h5>
									</div>

									<div className="col-md-6 text-right text-right-left color_grey">
										<h3><span>${this.state.goal}</span></h3>
										<h5>goal</h5>
									</div>
								</div>
							</div>

							<div className="row ">
								<div className="col-md-10 center-box">
									

									<div className="col-md-10 center-box">
										<p className="margin-top-30px">
							              <a type="button" href="/schedule-demo" className="btn btn-primary btn-lg btn-lg-green max-width-380 margin_0_auto" >Donate to my goal</a>
							            </p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="donation_box_full">
						
						<div className="container">
							<div className="row">
								<div className="col-md-12 text-center margin_0_auto">
									
									<h2>DONATIONS</h2>
										
								</div>
							</div>
						</div>
					</div>
					<div className="donation_box_full">
						<div className="container">
							<div className="row">
								<div className="col-md-6 text-left">
									
									<h4>Donor Name <span>Donated ###</span></h4>
										
								</div>

								<div className="col-md-6 text-right text-right-left">
									
									<h4>Time and date donation happened</h4>
										
								</div>
							</div>
				
						</div>
					</div>
				</div>
			</div>
		
		);
	}
});