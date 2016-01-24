import alt from '../alt';
import SignUpActions from '../actions/SignUpActions';

class SignUpStore {
  constructor() {
    this.bindActions(SignUpActions);
    this.user = {};
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

  onSignUpSuccess(data) {
    console.log("user is " + data.user.user);

    // TODO: find way to set user info after signup/login to local storage or the next state
    localStorage.user = data.user;
    console.log(localStorage.user.user);

    //redirect to All Teams Page or User Dashboard
    window.location.href = '/all_teams';
  }
  

}

export default alt.createStore(SignUpStore);