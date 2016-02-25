import React from 'react';
import {Link} from 'react-router';
import Authenticated from '../decorators/AuthenticatedComponent';

export default class UserNav extends React.Component {

	constructor(props) {
		super(props);
	}
	check() {
		
		console.log("Checking User in User nav now is " + this.user);
	}

	handleSignOut() {
	   localStorage.removeItem('jwt');
	   window.location.href ='/';
	}
	
	render() {

		this.check();
		return (
			<div className="user-nav">
				<ul className="nav">
					<li className="btn btn-link">Username</li>
					<li className="btn btn-link">View your page</li>
					<li className="btn btn-link">Edit your page</li>
					<li className="btn btn-success pull-right" onClick={this.handleSignOut}>Sign Out</li> 
				</ul>
			</div>
		)
	}
}