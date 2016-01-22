import alt from '../alt';
import SignUpActions from '../actions/SignUpActions';

class SignUpStore {
  constructor() {
    this.bindActions(SignUpActions);
    this.email = '';
    this.password = '';   
    this.password_conf = '';  
    this.first_name = '';
    this.last_name = '';
  }

  onUpdateFirstName(event) {
  	this.first_name = event.target.value;
  }

  onUpdateLastName(event) {
    this.last_name = event.target.value;
  }

  onUpdateEmail(event) {
    this.email = event.target.value;
  }

  onUpdatePassword(event) {
  	this.password = event.target.value;
  }

  onUpdatePasswordConf(event) {
    this.password_conf = event.target.value;
  }

  

}

export default alt.createStore(SignUpStore);