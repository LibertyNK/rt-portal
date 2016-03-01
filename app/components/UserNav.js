import React from 'react';
import {Link} from 'react-router';
import AuthenticatedComponent from '../decorators/AuthenticatedComponent';

export default AuthenticatedComponent (class Navigation extends React.Component {

	constructor(props) {
		super(props);
		console.log();
	}

	handleSignOut() {
	   localStorage.removeItem('jwt');
	   window.location.href ='/';
	}
	
	render() {
		console.log(this.props.user);
		return (
			<div className="user-nav">

				
					{this.props.user.team_uuid ? 
						<ul className="nav">

							<li className="btn btn-link"><Link to={'/' + this.props.user.username}>{ this.props.user.first_name } { this.props.user.last_name }</Link></li>
							<li className=""><Link to={'/' + this.props.user.username}><div className="edit_buttons">View Your Page  <span className="glyphicon glyphicon-user"></span></div></Link></li>
							<li className=""><Link to='update-profile'><div className="edit_buttons">Edit Your Page  <span className="glyphicon glyphicon-pencil"></span></div></Link></li>
							<li className=""><Link to={'/team/' + this.props.user.team_username}><div className="edit_buttons">View Your Team Page  <span className="glyphicon glyphicon-user"></span></div></Link></li>

							{this.props.user.admin_level === 2 ? 

							<li className=""><Link to='update-team'><div className="edit_buttons">Edit Your Team Page  <span className="	glyphicon glyphicon-pencil"></span></div></Link></li>
							:

							null

							}

							<li className="btn btn-link pull-right" onClick={this.handleSignOut}>Log Out</li> 
						</ul>
						:

						<ul className="nav">
							<li className="btn btn-link"><Link to={'/' + this.props.user.username}>{ this.props.user.first_name } { this.props.user.last_name }</Link></li>
							<li className=""><Link to={'/' + this.props.user.username}><div className="edit_buttons">View Your Page  <span className="glyphicon glyphicon-user"></span></div></Link></li>
							<li className=""><Link to='update-profile'><div className="edit_buttons">Edit Your Page  <span className="glyphicon glyphicon-pencil"></span></div></Link></li>


							<li className="btn btn-link pull-right" onClick={this.handleSignOut}>Log Out</li> 
						</ul>

					}
					
					

			</div>
		)
	}
});