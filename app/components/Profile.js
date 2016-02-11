import React from 'react';

class Profile extends React.Component {
	render() {
		// var user = window.localStorage.getItem('user');
		// console.log(user);
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

									<h2>Nick Leonard</h2>
									<h4>Member of <a href="#">Team Name</a></h4>

								</div>

								<div className="col-md-4 profile_image">
									<img className="" src="http://www.libertyinnorthkorea.org/wp-content/uploads/2016/02/profile_blank.png" />
								</div>

								<div className="col-md-4 pull-right">
									<button>Donate to Nico</button>
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
									<h2>$300</h2>
									<h4>Goal</h4>
								</div>
							</div>

							<div className="row padding_100">
								<div className="col-md-6">

									<h2>ABOUT</h2>
									<h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt exp.</h4>
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