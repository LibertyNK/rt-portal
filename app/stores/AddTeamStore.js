import alt from '../alt';
import AddTeamActions from '../actions/AddTeamActions';

class AddTeamStore {

   constructor() {
    	this.bindActions(AddTeamActions);

    	this.user = {};

    	this.team_name = '';
    	this.street = '';
    	this.address = '';
    	this.state = '';
    	this.zipcode = '',
    	this.about = '';

    	this.helpBlock = {
    								team_name: '',
    								street: '',
    								address: '',
    								state: '',
    								zipcode: '',
    								about: ''
    					     };
     	this.validationState = {
     										team_name: '',
		    								street: '',
		    								address: '',
		    								state: '',
		    								zipcode: '',
		    								about: ''
     								  };

	   this.errorMessage = '';
	   this.errorMessageState = '';
    	
   }

   onUpdateTeamName(event) {
   	this.team_name = event.target.value;
   }

   onInValidTeamName() {
   	this.validationState.team_name = 'has-error';
   	this.helpBlock.team_name = 'Team Name is required';
   }

   onUpdateStreet(event) {
   	this.street = event.target.value;
   }

   onInValidStreet() {
   	this.validationState.street = 'has-error';
   	this.helpBlock.street = 'Street is required';
   }

   onUpdateAddress(event) {
   	this.address = event.target.value;
   }

   onInValidAddress() {
   	this.validationState.address = 'has-error';
   	this.helpBlock.address = 'Address is required';
   }

   onUpdateState(event) {
   	this.state= event.target.value;
   }

   onInValidState() {
   	this.validationState.state = 'has-error';
   	this.helpBlock.state = 'State is required';
   }

   onUpdateZipcode(event) {
   	this.zipcode = event.target.value;
   }

   onInValidZipcode() {
   	this.validationState.zipcode = 'has-error';
   	this.helpBlock.zipcode = 'Zipcode is required';
   }

   onUpdateAbout(event) {
   	this.about = event.target.value;
   }

   onInValidAbout() {
   	this.validationState.about = 'has-error';
   	this.helpBlock.about = 'Say something about the team';
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

  	onAddTeamFail(error) {
    	this.errorMessage = error.responseJSON.message;
    	this.errorMessageState = 'alert alert-danger';
  	}

   
}

export default alt.createStore(AddTeamStore);