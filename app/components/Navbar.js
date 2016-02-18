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
    $( this.refs.toggleInput.getDOMNode() ).bootstrapToggle();
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
            <li className="dropdown nav-buttons">
              <a href="#" className="just-text" data-toggle="dropdown">More <b className="caret"></b></a>
              <ul className="dropdown-menu">
                <li><Link to='/refugee_stories'>Giving Forms</Link></li>
                <li className="divider"></li>
                <li><Link to='/refugee_stories'>Recurring Giving</Link></li>
                
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;