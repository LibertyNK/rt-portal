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
import JoinTeam from './components/JoinTeam';
import JoinTeamForm from './components/JoinTeamForm';
import UpdateTeamSettings from './components/UpdateTeam';
import UpdateProfileSettings from './components/UpdateProfile';
import PickTeam from './components/PickTeam';
import UpdateProfile from './components/UpdateProfile';
import ErrorPage from './components/404Page';


export default (
  	<Route component={App}>
	   <Route name="" path='/' component={Home} />
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
	   <Route name="create-team" path='/create-team' component={AddTeam} />
	   <Route name="join-team" path='/join-team' component={JoinTeamForm} />
	   <Route name="update_team" path='/update_team' component={UpdateTeamSettings} />
	   <Route name="update-profile" path='/update-profile' component={UpdateProfileSettings} />
	   <Route name="pick-team" path='/pick-team' component={PickTeam} />
	   <Route name="update_profile" path='/update_profile' component={UpdateProfile} />
	   <Route name="profile" path='/:username' component={Profile} />
	   <Route name="404" path='/error' component={ErrorPage} />
 	</Route>
);






