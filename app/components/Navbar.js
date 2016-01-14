import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
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
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav pull-right'>
            <li className='dropdown'>
              <a href='/' className='dropdown-toggle' data-toggle='dropdown'>Main Site<span className='caret'></span></a>
            </li> 
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/team'>Team</Link></li> 
            <li><Link to='/all_teams'>All Teams</Link></li> 
            <li><Link to='/event'>Event</Link></li> 
            <li><Link to='/all_events'>All Events</Link></li>
            <li><Link to='/refugee'>Refugee</Link></li> 
            <li><Link to='/all_refugees'>All Refugees</Link></li>
            <li><Link to='/login'>Log In</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;