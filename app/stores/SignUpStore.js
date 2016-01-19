import alt from '../alt';
import SignUpActions from '../actions/SignUpActions';

class SignUpStore {
  constructor() {
    this.bindActions(SignUpActions);
    this.username = '';
    this.password = '';   
    this.password_conf = '';  
  }

  onUpdateUsername(event) {
  	this.username = event.target.value;
  }

  onUpdatePassword(event) {
  	this.password = event.target.value;
  }

  onUpdatePasswordConf(event) {
    this.password_conf = event.target.value;
  }

}

export default alt.createStore(SignUpStore);