import React from 'react';
import { Link } from 'react-router'
import ApiUtils from '../utils/apiUtils';

class Team extends React.Component {

	constructor(props) {
		super(props);
		this._load = this._load.bind(this);
		this.state = {team: {}, users: {}};
	}

	componentDidMount() {
		this._load();

	}

	_load() {
		console.log(this.props.params.team_name);
	 	ApiUtils.findTeam(this.props.params.team_name)
	 		.done((data) => {
	 			this.setState(data);
	 			console.log(data);
	 	})
	 	.fail((jqXhr) => {
	 		console.log('Error Message from server: ');
	 	});	
	}

	render() {



		var style = {
		    width: ((this.state.team.amount_raised / this.state.team.goal) * 100) + "%" 
		};

		return (
			<div className="">

				<div className="map_background">
				</div>


				<div className="profile_banner">

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

									<h3>{this.state.team.team_name}</h3>
									<h4>Location {this.state.team.team_city}</h4>

								</div>
							</div>

							<div className="row padding-top-space-30px">
								<div className="col-md-10 text-center">
									<div className="col-md-4 text-left">
										{this.state.team.team_tier ? 
											<h3>{this.state.team.team_tier}</h3>

											:

											<h3>0</h3>
										}
										
										<p>Team ranking</p>
										

									</div>
									<div className="col-md-4 text-left">

										<h3>${this.state.team.amount_raised}</h3>
										<p>Amount raised</p>
										

									</div>
									<div className="col-md-4 text-left">

										<h3>{this.state.users.length}</h3>
										<p>Members</p>
										

									</div>

								</div>
							</div>

							<div className="row padding-top-space-30px">
								<div className="col-md-10 text-left center-box">

									<p>{this.state.team.about}</p>
									

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
										<h3>${this.state.team.amount_raised}</h3>
										<h5>raised</h5>
									</div>

									<div className="col-md-6 text-right text-right-left color_grey">
										<h3><span>${this.state.team.goal}</span></h3>
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
}

export default Team;