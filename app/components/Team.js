import React from 'react';

class Team extends React.Component {
	render() {

		return (

			<div className="team_background">
				<div className="content_box"> 
					<div className="row buffer">
						<div className="col-md-2 pull-right">
							<button>Edit page</button>
						</div>
					</div>

					<div className="">
						<div className='team_image'>
							<img className="" src="http://www.libertyinnorthkorea.org/wp-content/uploads/2016/02/rt_team.jpg" />
						</div>
					</div>
				
					<div className="">
						<div className="col-md-12 profile_card">
							<div className="row ">
								<div className="col-md-6">

									<h2>TEAM NAME</h2>
									<h4>Location</h4>
									<button>Join Team</button>
									<button>Donate to team</button>
								</div>

								<div className="col-md-3">
									<h2>$0</h2>
									<h4>Raised</h4>
								</div>

								<div className="col-md-3">
									<h2>300</h2>
									<h4>Team Ranking</h4>
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
						</div>

						<div className="col-md-12">
							<div className="row padding_100">
								<div className="col-md-6">

									<h2>ABOUT</h2>
									<h4>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt exp.</h4>
								</div>

								<div className="col-md-3">

								</div>

								<div className="col-md-3">
									<h2>Members</h2>
									<button>Join Team</button>
									<h4>Nick leonard $0.00</h4>
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
									<h2>Nico Created Team   3-18-2016</h2>
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