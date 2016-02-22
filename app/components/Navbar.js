import React from 'react';
import {Link} from 'react-router';
import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';
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

  onSelected(e) {
    // doesn't need to have functionality (necessarily) ... just wired up
}

  
  render() {

    var os = this;

    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar'>
            <span className='sr-only'>Toggle navigation</span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
            <span className='icon-bar'></span>
          </button>
          <div className='navbar-brand'><Link to='/'>
            <img src="img/link_logo.png" />
            <h3>Rescue Campaigns</h3>
          </Link></div>
        </div>
        <div id='navbar' className='navbar-collapse collapse'>
          <ul className='nav navbar-nav'>

            <li><Link to='/login'>Log In</Link></li> 
            <li><Link to='/signup'>Sign Up</Link></li> 
            <li><Link to='/all_teams'>Teams</Link></li> 
            <li><Link to='/all_members'>Members</Link></li>
            <li><Link to='/refugee_stories'>Refugee Stories</Link></li>
            <li className="dropdown nav-buttons"><ButtonToolbar>
                <DropdownButton title="Menu" id="dropdown-basic" onSelect={ this.OnSelected } className="just-text dropdown-toggle menu-dropdown btn-group-link">
                  <li><Link to='/login'>Who & Why we Rescue</Link></li>
                  <MenuItem divider />
                  <MenuItem eventKey="4" href="/login">About LiNK</MenuItem>
                </DropdownButton>
              </ButtonToolbar>
            </li>
           
          </ul>

          <ul className='nav donate-nav'>
            <li><Link to='/login'>Donate</Link></li> 
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;