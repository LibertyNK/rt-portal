import React from 'react';
import {Link} from 'react-router';


class AddTeam extends React.Component {
	render() {
		console.log('rendering form page');
		return (
			<div className='text-center team-options red-bg'>
				<h2>Start A Team</h2>
				<div className='col-sm-6'>
					<button className='btn btn-large blue-btn'><Link to='/new_team'>Team on a school campus</Link></button>
				</div>
				<div className='col-sm-6'>
					<button className='btn btn-large blue-btn'><Link to='/new_team'>General Team Stuff</Link></button>
				</div>
			</div>
		);
	}
}

export default AddTeam;