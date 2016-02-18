import alt from '../alt';
import LogInActions from '../actions/LogInActions';
import {LOGIN_USER, LOGOUT_USER} from '../constants/ActionTypes';
import jwt_decode from 'jwt-decode';

class LogInStore {
  constructor() {
    // super();
    this.bindActions(LogInActions);
    this.email = '';
    this.password = '';  
    this.user = null;
    this.jwt = null; 

  }

  onUpdateEmail(event) {
  	this.email = event.target.value;
  }

  onUpdatePassword(event) {
  	this.password = event.target.value;
  }

  onLogInSuccess(response) {
    // Response should contain a token sent from server
    this.jwt = response.token;

    // Decode JWT to get the user information and store it
    this.user = jwt_decode(this.jwt);

  }

  getUser() {
    return this.user;
  }

  getJwt() {
    return this.jwt;
  }

  isLoggedIn() {
    return !!this.user;
  }


}

export default alt.createStore(LogInStore);