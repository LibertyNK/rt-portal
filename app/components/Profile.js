import React from 'react';
import { Link } from 'react-router'
import ApiUtils from '../utils/apiUtils';


class Profile extends React.Component {
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
				<div className="background_image" style={{backgroundImage: "url('http://www.libertyinnorthkorea.org/wp-content/uploads/2016/02/rt_team.jpg')"}}>
				</div>
				<div className="content_box"> 
					<div className="row buffer">
						<div className="col-md-2 pull-right">
							<button>Edit page</button>
						</div>
					</div>
				
					<div className="">
						<div className="col-md-12 profile_card">
							<div className="row ">
								<div className="col-md-4">

									<h2>{this.state.first_name} {this.state.last_name}</h2>
									<h4>Member of <a href="#">Team Name</a></h4>

								</div>

								<div className="col-md-4 profile_image">
									<img className="" src="http://www.libertyinnorthkorea.org/wp-content/uploads/2016/02/profile_blank.png" />
								</div>

								<div className="col-md-4 pull-right">
									<button>Donate to {this.state.first_name}</button>
								</div>

							</div>

							<div className="row">
								<div className="col-md-12">
									<div className="thermometer">

										<div className="therm_progress">
										</div>
									</div>	
								</div>
							</div>

							<div className="row ">

								<div className="col-md-6">
									<h2>$0</h2>
								</div>

								<div className="col-md-6 text-right">
									<h2>${this.state.goal}</h2>
									<h4>Goal</h4>
								</div>
							</div>

							<div className="row padding_100">
								<div className="col-md-6">

									<h2>ABOUT</h2>
									<h4>{this.state.about}</h4>
								</div>

								<div className="col-md-6">
									<iframe width="560" height="315" src="https://www.youtube.com/embed/tx45jDnBJyI" frameborder="0" allowfullscreen></iframe>
								</div>
							</div>
						</div>


						<div className="col-md-12">
							<div className="row padding_100">
								<div className="col-md-12 text-center">
									<h2>ACTIVITY</h2>
								</div>
							</div>

							<div className="row ">
								<div className="col-md-6">
									<h2>Bill  Donated $30.00  3-18-2016  9:10am</h2>
								</div>
							</div>

							<div className="row ">
								<div className="col-md-6">
									<h2>Jimmy  Donated $30.00  3-18-2016  9:10am</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;