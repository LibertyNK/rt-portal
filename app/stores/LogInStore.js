import alt from '../alt';
import LogInActions from '../actions/LogInActions';
import {LOGIN_USER, LOGOUT_USER} from '../constants/ActionTypes';
import jwt_decode from 'jwt-decode';
import Iso from 'iso';


class LogInStore {

  constructor() {

    this.bindActions(LogInActions);
    this.email = '';
    this.password = ''; 
    this.user = null;
    this.jwt = null;

    this.helpBlock = {
      email: '',
      password: ''
    };

    this.validationState = {
      email: '',
      password: ''
    };

    this.errorMessage = '';
    this.errorMessageState = '';
    this.inputBackground = '';
      
    }

  onUpdateEmail(event) {
  	this.email = event.target.value;
  }

  onInvalidEmail() {
    this.validationState.email = 'has-error';
    this.helpBlock.email = 'Please enter an email address';
  } 

  onUpdatePassword(event) {
  	this.password = event.target.value;
  }

  onInvalidPassword() {
    this.validationState.password = 'has-error';
    this.helpBlock.password = "Password can't be blank!";
  }

  onLogInSuccess(token) {
    this.jwt = token;
    this.user = jwt_decode(token);
    console.log('LogIn Store user: ' + this.user.username);  
  }

  onLogInFail(error) {
    this.errorMessageState = 'text-danger';
    this.errorMessage = error;
    this.inputBackground = 'bg-danger';
  }
}

export default alt.createStore(LogInStore);