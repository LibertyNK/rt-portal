import React from 'react';
import {Link} from 'react-router';
import AuthenticatedComponent from '../decorators/AuthenticatedComponent';
import ApiUtils from '../utils/apiUtils';

export default AuthenticatedComponent (class Navigation extends React.Component {

	constructor(props) {
		super(props);
		this._load = this._load.bind(this);
		this._getTeam = this._getTeam.bind(this);
		this.state = {username: '', first_name: '', last_name: '', goal: '', about: '', team_uuid: '', team_username: ''};

	}

	componentDidMount() {
		this._load();
	}

	handleSignOut() {
	   localStorage.removeItem('jwt');
	   window.location.href ='/';
	}

	_load() {

	 	ApiUtils.findUser(this.props.user.username)
	 		.done((data) => {
	 			console.log(data);
	 			this.setState(data.user);
	 			this._getTeam();
	 	})
	 	.fail((jqXhr) => {
	 		console.log('Error Message from server: '+ jqXhr.responseJSON.message);
	 	});	

	 	

	 	
	}

	_getTeam() {
		ApiUtils.getTeam(this.state.team_uuid)
	 		.done((data) => {
	 			this.setState({team_username: data.team.username});
	 	})
	 	.fail((jqXhr) => {
	 		console.log('Error Message from server');
	 	});	

	}

	
	render() {
		return (
			<div className="user-nav">

				
					{this.state.team_uuid ? 
						<ul className="nav">

							<li className="btn btn-link"><Link to={'/' + this.state.username}>{ this.state.first_name } { this.state.last_name }</Link></li>
							<li className=""><Link to={'/' + this.state.username}><div className="edit_buttons">View Your Page  <span className="glyphicon glyphicon-user"></span></div></Link></li>
							<li className=""><Link to='update-profile'><div className="edit_buttons">Edit Your Page  <span className="glyphicon glyphicon-pencil"></span></div></Link></li>
							<li className=""><Link to={'/team/' + this.state.team_username}><div className="edit_buttons">View Your Team Page  <span className="glyphicon glyphicon-user"></span></div></Link></li>

							{this.props.user.admin_level === 2 ? 

								<li className=""><Link to='update-team'><div className="edit_buttons">Edit Your Team Page  <span className="	glyphicon glyphicon-pencil"></span></div></Link></li>
							:

								null

							}

							<li className="btn btn-link pull-right" onClick={this.handleSignOut}>Log Out</li> 
						</ul>
						:

						<ul className="nav">
							<li className="btn btn-link"><Link to={'/' + this.state.username}>{ this.state.first_name } { this.state.last_name }</Link></li>
							<li className=""><Link to={'/' + this.state.username}><div className="edit_buttons">View Your Page  <span className="glyphicon glyphicon-user"></span></div></Link></li>
							<li className=""><Link to='update-profile'><div className="edit_buttons">Edit Your Page  <span className="glyphicon glyphicon-pencil"></span></div></Link></li>


							<li className="btn btn-link pull-right" onClick={this.handleSignOut}>Log Out</li> 
						</ul>

					}
					
					

			</div>
		)
	}
});