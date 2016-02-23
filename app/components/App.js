import React from 'react';
import {Link} from 'react-router';
import Nav from './Navbar';
import Footer from './Footer';
import LoginActions from '../actions/LoginActions';

class App extends React.Component {


  render() {

	return (

	      <div>
	    	<Nav history={this.props.history} />
	        {this.props.children}

	      </div>
	    );
	  }
}

export default App;

