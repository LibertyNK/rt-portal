import React from 'react';
import {Link} from 'react-router';

import AuthenticatedComponent from '../decorators/AuthenticatedComponent';
import {LOGIN_USER, LOGOUT_USER} from '../constants/ActionTypes';


export default AuthenticatedComponent(class PickTeam extends React.Component {

	constructor(props) {
		super(props);
		this._load = this._load.bind(this);
		this.state = {username: ''};
	}

	componentDidMount() {
		this._load();
	}

	_load() {
		this.userlogged = this.props.user.username;
		this.setState({username : this.userlogged });
		
	}

	render() {

		return (
		<div className="pre_head_padding">
			<div className="map_background">
			</div>
					
			<div className="form_card">
				<div className='text-left'>
					<div className="row">
						<div className='col-sm-12'>
							<h2>Your page has been successfully created! Next do you want to join or start a team!</h2>
						</div>
					</div>

					<div className="row">
						<div className='col-sm-12'>
							<div className="banner-border-seperation"></div>
						</div>
					</div>

					<div className="row">
						<div className='col-sm-12'>
							<Link  to={'/' + this.state.username}><span className='btn btn-large red-btn width_100 btn_color'>Fundraise individially <span className="glyphicon glyphicon-chevron-right arrow-right" aria-hidden="true"></span></span></Link>
						</div>
						<div className='col-sm-12'>
							<Link  params={{ signupNext: "create" }} to='/create-team'><span className='btn btn-large red-btn width_100 btn_color'>Start a team</span></Link>
						</div>
						<div className='col-sm-12'>
							<Link params={{ signupNext: "join" }} to='/join_team_form'><span className='btn btn-large red-btn width_100 btn_color'>Join a team</span></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
});
