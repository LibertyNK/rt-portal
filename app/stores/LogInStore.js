import alt from '../alt';
import LogInActions from '../actions/LogInActions';

class LogInStore {
  constructor() {
    this.bindActions(LogInActions);
    this.username = '';
    this.password = '';   
  }

  onUpdateUsername(event) {
  	this.username = event.target.value;
  }

  onUpdatePassword(event) {
  	this.password = event.target.value;
  }

}

export default alt.createStore(LogInStore);