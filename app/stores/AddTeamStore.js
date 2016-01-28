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

    	this.user = "lannify@gmail.com"; 
      // Temporarily using fixed email to find user for now. Should change this later to user ID or something


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
    this.helpBlock.team_name = "Team Name can't be blank!";
  }

  onInvalidTeamNameLength() {
    this.validationState.team_name = 'has-error';
    this.helpBlock.team_name += ". Team Name has to be between 3 and 50 characters.";
  }

  onUpdateAddress1(event) {
   	this.address1 = event.target.value;
  }

  onInvalidAddress1() {
    this.validationState.address1 = 'has-error';
    this.helpBlock.address1 = "Address can't be blank!";
  }

  onUpdateAddress2(event) {
   	this.address2 = event.target.value;
  }

   // onInValidAddress() {
   // 	this.validationState.address = 'has-error';
   // 	this.helpBlock.address = 'Address is required';
   // }

  onUpdateState(event) {
   	this.team_state= event.target.value;
  }

  onInvalidState() {
    this.validationState.team_state = 'has-error';
    this.helpBlock.team_state = "State can't be blank!";
  }

  onUpdateZipcode(event) {
   	this.zipcode = event.target.value;
  }

  onInvalidZipcode() {
    this.validationState.zipcode = 'has-error';
    this.helpBlock.zipcode = "Zipcode can't be blank!";
  }

  onUpdateCountry(event) {
    this.country = event.target.value;
  }

  onInvalidCountry() {
    this.validationState.country= 'has-error';
    this.helpBlock.country= "Country can't be blank!";
  }

  onUpdateAbout(event) {
   	this.about = event.target.value;
  }

  onInvalidAbout() {
    this.validationState.about = 'has-error';
    this.helpBlock.about = "Say something about your team goal";
  }

   onInvalidAboutLength() {
   	this.validationState.about = 'has-error';
   	this.helpBlock.about += '. Must be between 150 and 500 characters.';
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
  	this.errorMessage = error;
  	this.errorMessageState = 'alert alert-danger';
	}


   
}

export default alt.createStore(AddTeamStore);