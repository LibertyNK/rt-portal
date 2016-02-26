import React from 'react';
import {Link} from 'react-router';
import AuthenticatedComponent from '../decorators/AuthenticatedComponent';

export default AuthenticatedComponent (class Navigation extends React.Component {

	constructor(props) {
		super(props);
	}

	handleSignOut() {
	   localStorage.removeItem('jwt');
	   window.location.href ='/';
	}
	
	render() {

		return (
			<div className="user-nav">
				<ul className="nav">
					<li className="btn btn-link"><Link to={'/' + this.props.user.username}>{ this.props.user.first_name } { this.props.user.last_name }</Link></li>
					<li className="btn btn-link"><Link to={'/' + this.props.user.username}>View Your Page</Link></li>
					<li className="btn btn-link"><Link to='update-profile'>Edit your page</Link></li>
					<li className="btn btn-success pull-right" onClick={this.handleSignOut}>Sign Out</li> 
				</ul>
			</div>
		)
	}
});