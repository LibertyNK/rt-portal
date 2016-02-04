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
						<Link className='btn btn-large red-btn width_100 btn_color' to='/new_team'>Team on a school campus</Link>
					</div>
					<div className='col-sm-12'>
						<Link className='btn btn-large red-btn width_100 btn_color' to='/new_team'>Join a team</Link>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default AddTeam;