import alt from '../alt';
import LogInActions from '../actions/LogInActions';
import {LOGIN_USER, LOGOUT_USER} from '../constants/ActionTypes';
import jwt_decode from 'jwt_decode';

class LogInStore {
  constructor() {
    super();
    this.bindActions(LogInActions);
    this.email = '';
    this.password = '';  
    this._user = null;
    this._jwt = null; 
  }

  onUpdateEmail(event) {
  	this.email = event.target.value;
  }

  onUpdatePassword(event) {
  	this.password = event.target.value;
  }

  // onLogInSuccess() {
  //   window.location.href = '/dashboard';
  // }

  

}

export default alt.createStore(LogInStore);