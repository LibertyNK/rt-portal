import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';
import AuthenticatedComponent from '../decorators/AuthenticatedComponent';

export default AuthenticatedComponent(class Navbar extends React.Component {

  render() {

    var os = this;

    if(this.props.user !== null) {
      console.log("Username in Navbar is" + this.props.user.username);
      let username = this.props.user.username;
    }

    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <Link to='/' className='navbar-brand'>
            rtPORTAL
          </Link>
          <ul><li>Helllo</li></ul>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>
            <li><Link to='/add_team'>Start a Team</Link></li> 
            <li><Link to='/all_teams'>Find a Teams</Link></li> 
            <li><Link to='/refugee'>Rescued Refugees</Link></li> 
            <li><Link to='/about'>How We Rescue</Link></li>
            <li><Link to='/login'>Log In</Link></li>
            <li><Link to='/update_profile'>Update Profile</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
});

