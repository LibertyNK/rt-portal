import React from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';
import UserNav from './UserNav';
import AuthenticatedComponent from '../decorators/AuthenticatedComponent';

export default AuthenticatedComponent (class Navigation extends React.Component {

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

    const user = this.props.user;

    return (
      <Navbar inverse>
        {user && 
          <UserNav /> 
        }
        <Navbar.Header>
          <Navbar.Brand>
            <div className='navbar-brand'><Link to='/'>
              <img src="img/link_logo.png" />
              <h3>Rescue Campaigns</h3>
            </Link></div>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {!user && 
              <li><Link to='/login'>Log In</Link></li>      
            }
            {!user && 
              <li><Link to='/signup'>Sign Up</Link></li>      
            }          
            <li><Link to='/all_teams'>Teams</Link></li> 
            <li><Link to='/all_members'>Members</Link></li>
            <li><Link to='/refugee_stories'>Refugee Stories</Link></li>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <li><Link to='/login'>Who & Why we Rescue</Link></li>
              <MenuItem divider />
              <li><Link to='/login'>About LiNK</Link></li>
            </NavDropdown>
            
          </Nav>
          <Nav className="nav donate-nav " pullRight>
            <li className="donate-nav-li"><Link to='/login'>Donate</Link></li> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
});
