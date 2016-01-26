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
    this.helpBlock = {
                        first_name: '',
                        last_name: '',
                        email: '',
                        password: '',
                        password_length: '',
                        password_conf:'',
                        matching_passwords:''
                     };
    this.validationState = {
                              first_name: '',
                              last_name: '',
                              email: '',
                              password: '',
                              password_length: '',
                              password_conf:'',
                              matching_passwords:''
                           };
    this.errorMessage = '';
    this.errorMessageState = '';
  }

  onUpdateFirstName(event) {
  	this.first_name = event.target.value;
  }

  onInvalidFirstName() {
    this.validationState.first_name = 'has-error';
    this.helpBlock.first_name = "First Name can't be blank!";
  }

  onUpdateLastName(event) {
    this.last_name = event.target.value;
  }

  onInvalidLastName() {
    this.validationState.last_name = 'has-error';
    this.helpBlock.last_name = "Last Name can't be blank!";
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

   onInvalidPasswordLength() {
    this.validationState.password_length = 'has-error';
    this.helpBlock.password_length = "Password needs to have at least 6 characters!";
  }

  onUpdatePasswordConf(event) {
    this.password_conf = event.target.value;
  }

  onInvalidPasswordConf() {
    this.validationState.password_conf = 'has-error';
    this.helpBlock.password_conf = "Password confirmation needed!";
  }

  onUnmatchPasswords() {
    this.validationState.matching_passwords = 'has-error';
    this.helpBlock.matching_passwords = "Passwords are not matching!";
  }

  onSignUpSuccess(data) {

    this.errorMessage = data.message;
    if (data.message == 'success') {
      this.errorMessageState = 'alert alert-success text-center';

      //redirect to All Teams Page or User Dashboard
      window.location.href = '/new_team';

      // TODO: find way to set user info after signup/login to local storage or the next state

    } else {
      this.errorMessageState = 'alert alert-danger';
    }   
 
  }

  onSignUpFail(errors) {
    this.errorMessage = errors.message;
    this.errorMessageState = 'alert alert-danger';
  }
  

}

export default alt.createStore(SignUpStore);