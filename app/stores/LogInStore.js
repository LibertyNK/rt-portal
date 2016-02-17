import alt from '../alt';
import LogInActions from '../actions/LogInActions';
import jwt_decode from 'jwt-decode';

class LogInStore {
  constructor() {
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

  onLogInSuccess(response) {
    // Response should contain a token sent from server
    this._jwt = response.token;

    // Decode JWT to get the user information and store it
    this._user = jwt_decode(this._jwt);

  }

  getUser() {
    return this._user;
  }

  getJwt() {
    return this._jwt;
  }

  isLoggedIn() {
    return !!this._user;
  }

}

export default alt.createStore(LogInStore);