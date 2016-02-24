import React from 'react';
import {Link} from 'react-router';
import Navbar from './Navbar';
// import Footer from './Footer';
import AuthenticatedComponent from '../decorators/AuthenticatedComponent';

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
	    	<Navbar history={this.props.history} />
	        {this.props.children}

	      </div>
	    );
	  }
});


