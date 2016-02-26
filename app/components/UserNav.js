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
					<li className="btn btn-link"><Link to={'/member/' + this.props.user.username}>{ this.props.user.full_name }</Link></li>
					<li className="btn btn-link"><Link to={'/member/' + this.props.user.username}>View Your Page</Link></li>
					<li className="btn btn-link"><Link to='update_profile'>Edit your page</Link></li>
					<li className="btn btn-success pull-right" onClick={this.handleSignOut}>Sign Out</li> 
				</ul>
			</div>
		)
	}
});