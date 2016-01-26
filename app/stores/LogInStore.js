import alt from '../alt';
import LogInActions from '../actions/LogInActions';

class LogInStore {
  constructor() {
    this.bindActions(LogInActions);
    this.email = '';
    this.password = '';   
  }

  onUpdateEmail(event) {
  	this.email = event.target.value;
  }

  onUpdatePassword(event) {
  	this.password = event.target.value;
  }

  onLogInSuccess() {
    window.location.href = '/dashboard';
  }

}

export default alt.createStore(LogInStore);