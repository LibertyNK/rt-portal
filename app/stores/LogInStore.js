import alt from '../alt';
import LogInActions from '../actions/LogInActions';
import {LOGIN_USER, LOGOUT_USER} from '../constants/ActionTypes';
import jwt_decode from 'jwt-decode';
import Iso from 'iso';

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

  onLogInSuccess(token) {
    this.jwt = token;
    this.user = jwt_decode(token);
    console.log('logged in');
  }
}

export default alt.createStore(LogInStore);