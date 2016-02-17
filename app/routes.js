import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import AddTeam from './components/AddTeam';
import About from './components/About';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Team from './components/Team';
import AllTeams from './components/AllTeams';
import Event from './components/Event';
import AllEvents from './components/AllEvents';
import Refugee from './components/Refugee';
import AllRefugees from './components/AllRefugees';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import NewTeamForm from './components/NewTeamForm';
import JoinTeam from './components/JoinTeam';
import JoinTeamForm from './components/JoinTeamForm';
import UpdateTeamSettings from './components/UpdateTeam';
import UpdateProfileSettings from './components/UpdateProfile';
import SignUpSuccess from './components/SignUpSuccess';


export default (
  	<Route component={App}>
	   <Route name="" path='/' component={Home} />
	   <Route name="add_team" path='/add_team' component={AddTeam} />
	   <Route name="about" path='/about' component={About} />
	   <Route name="login" path='/login' component={LogIn} />
	   <Route name="signup" path='/signup' component={SignUp} />
	   <Route name="team" path='/team/:team_name' component={Team} />
	   <Route name="all_teams" path='/all_teams' component={AllTeams} />
	   <Route name="event" path='/event' component={Event} />
	   <Route name="all_events" path='/all_events' component={AllEvents} />
	   <Route name="refugee" path='/refugee' component={Refugee} />
	   <Route name="all_refugees" path='/all_refugees' component={AllRefugees} />
	   <Route name="dashboard" path='/dashboard' component={Dashboard} />
	   <Route name="profile" path='/member/:username' component={Profile} />
	   <Route name="new_team" path='/new_team' component={NewTeamForm} />
	   <Route name="join_team" path='/join_team' component={JoinTeam} />
	   <Route name="join_team_form" path='/join_team_form' component={JoinTeamForm} />
	   <Route name="update_team" path='/update_team' component={UpdateTeamSettings} />
	   <Route name="update_profile" path='/update_profile' component={UpdateProfileSettings} />
	   <Route name="signup_success" path='/signup_success' component={SignUpSuccess} />
 	</Route>
);






