import alt from '../alt';
import AddTeamActions from '../actions/AddTeamActions';

class AddTeamStore {

   constructor() {
    	this.bindActions(AddTeamActions);

    	this.team_name = '';
    	this.address1 = '';
    	this.address2 = '';
    	this.team_state = '';
    	this.zipcode = '';
      this.country = '';
    	this.about = '';
      this.username = '';

    
    	this.helpBlock = {
    								team_name: '',
    								address1: '',
    								address2: '',
    								team_state: '',
    								zipcode: '',
                    country: '',
    								about: ''
    					     };
     	this.validationState = {
     										team_name: '',
		    								address1: '',
		    								address2: '',
		    								team_state: '',
		    								zipcode: '',
                        country: '',
		    								about: ''
     								  };

	   this.errorMessage = '';
	   this.errorMessageState = '';
    	
   }

  onUpdateTeamName(event) {
   	this.team_name = event.target.value;
   }

  onInvalidTeamName() {
   	this.validationState.team_name = 'has-error';
   	this.helpBlock.team_name = 'Team Name is required';
   }

  onInvalidTeamNameLength() {
   	this.validationState.team_name = 'has-error';
   	this.helpBlock.team_name = 'Team name must be between 3 and 50 characters';
  }

  onUpdateAddress1(event) {
   	this.address1 = event.target.value;
  }

  onInvalidAddress1() {
   	this.validationState.address1 = 'has-error';
   	this.helpBlock.address1 = 'Address is required';
  }

  onUpdateAddress2(event) {
   	this.address2 = event.target.value;
  }

   onInvalidAddress() {
   	this.validationState.address = 'has-error';
   	this.helpBlock.address = 'Address is required';
   }

  onUpdateState(event) {
   	this.team_state= event.target.value;
  }

  onInvalidState() {
   	this.validationState.team_state = 'has-error';
   	this.helpBlock.team_state = 'State is required';
  }

  onUpdateZipcode(event) {
   	this.zipcode = event.target.value;
  }

  onInvalidZipcode() {
   	this.validationState.zipcode = 'has-error';
   	this.helpBlock.zipcode = 'Zipcode is required';
  }

  onUpdateCountry(event) {
    this.country = event.target.value;
  }

  onInvalidCountry() {
    this.validationState.country = 'has-error';
    this.helpBlock.country = 'Country is required';
  }

  onUpdateAbout(event) {
   	this.about = event.target.value;
  }
  onUpdateUsername(event) {
    this.username = event.target.value;
  }

  onInvalidAbout() {
   	this.validationState.about = 'has-error';
   	this.helpBlock.about = 'Say something about the team';
  }

  onInvalidAboutLength() {
   	this.validationState.about = 'has-error';
   	this.helpBlock.about = 'Must be between 150 and 500 characters';
  }

  onAddTeamSuccess(data) {

    this.errorMessage = data.message;
    if (data.message == 'success') {
      this.errorMessageState = 'alert alert-success text-center';

        // TODO: redirect user to New Team page

    } else {
        this.errorMessageState = 'alert alert-danger';
    }
   
	}

	onAddTeamFail(err) {

    console.log(err.errors[0].message);
  	this.errorMessage = err.errors[0].message;
  	this.errorMessageState = 'alert alert-danger';
	}

}

export default alt.createStore(AddTeamStore);