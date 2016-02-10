import React from 'react';
import {Link} from 'react-router';
import AddTeamStore from '../stores/AddTeamStore';
import AddTeamActions from '../actions/AddTeamActions';

class AddTeam extends React.Component {
	render() {
		return (

		<div className="form_card">
			<div className='text-left'>
				<div className="row">
					<div className='col-sm-12'>
						<h2>Would you like to start a new team or join a current team?</h2>
					</div>
				</div>

				<div className="row">
					<div className='col-sm-12'>
						<div className="banner-border-seperation"></div>
					</div>
				</div>

				<div className="row">
					<div className='col-sm-12'>
						<Link  params={{ signupNext: "create" }} to='/signup'><span className='btn btn-large red-btn width_100 btn_color'>Team on a school campus</span></Link>
					</div>
					<div className='col-sm-12'>
						<Link className='btn btn-large red-btn width_100 btn_color' params={{ signupNext: "join" }} to='/join_team_form'><span className='btn btn-large red-btn width_100 btn_color'>Join a team</span></Link>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default AddTeam;