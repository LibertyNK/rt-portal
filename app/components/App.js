import React from 'react';
import {Link} from 'react-router';
import Navbar from './Navbar';
import AuthenticatedComponent from '../decorators/AuthenticatedComponent';
import jwt_decode from 'jwt-decode';

import Nav from './Navbar';


export default AuthenticatedComponent(class App extends React.Component {

  render() {

	if (this.props.user !==null) {
		console.log("AuthenticatedComponent's user in App now is " + this.props.user.username );
	}

	else {
		console.log("AuthenticatedComponent's user in App now is empty");
	}

	return (

	      <div>
	    	<Nav history={this.props.history} />
	        {this.props.children}



	      </div>
	    );
	  }
});


