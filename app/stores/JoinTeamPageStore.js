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

}

export default alt.createStore(LogInStore);