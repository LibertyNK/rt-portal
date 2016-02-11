import React from 'react';
import {Link} from 'react-router';

class SignUpSuccess extends React.Component {
	render() {
		return (

		<div className="form_card">
			<div className='text-left'>
				<div className="row">
					<div className='col-sm-12'>
						<h2>Your page has been successfully created! Next lets create your team!</h2>
					</div>
				</div>

				<div className="row">
					<div className='col-sm-12'>
						<div className="banner-border-seperation"></div>
					</div>
				</div>

				<div className="row">
					<div className='col-sm-12'>
						<Link to='/new_team'><span className='btn btn-large red-btn width_100 btn_color'>Lets Create My Team</span></Link>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default SignUpSuccess;