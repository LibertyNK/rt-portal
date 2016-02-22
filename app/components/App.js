import React from 'react';
import {Link} from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginActions from '../actions/LoginActions';

class App extends React.Component {


  render() {

	return (

	      <div>
	    	<Navbar history={this.props.history} />
	        {this.props.children}

	      </div>
	    );
	  }
}

export default App;

