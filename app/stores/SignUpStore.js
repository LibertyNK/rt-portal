import alt from '../alt';
import SignUpActions from '../actions/SignUpActions';

class SignUpStore {
  constructor() {
    this.bindActions(SignUpActions);
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

export default alt.createStore(SignUpStore);