import alt from '../alt';
import AddTeamActions from '../actions/AddTeamActions';

class AddTeamStore {

   constructor() {
    	this.bindActions(AddTeamActions);

    	this.team_name = '';
      this.team_type = '';
      this.color = '';
      this.goal = '';
      this.about = '';
    	this.address1 = '';
    	this.address2 = '';
      this.team_city = '';
    	this.team_state = '';
    	this.zipcode = '';
      this.country = '';

      this.username = '';

    
    	this.helpBlock = {
    								team_name: '',
                    team_type: '',
                    color: '',
                    goal: '',
    								address1: '',
    								address2: '',
                    team_city: '',
    								team_state: '',
    								zipcode: '',
                    country: '',
    								about: ''
    					     };
     	this.validationState = {
     										team_name: '',
                        goal: '',
		    								address1: '',
		    								address2: '',
                        team_city: '',
		    								team_state: '',
		    								zipcode: '',
                        country: '',
                        username: '',
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

  onUpdateTeamType(event) {
    this.team_type = event.target.value;
  }

  onInvalidTeamType() {
    this.validationState.team_type = 'has-error';
    this.helpBlock.team_type = 'Team Type is required';
   }

  onUpdateColor(event) {
    this.color = event.target.value;
  }

  onInvalidColor() {
    this.validationState.color = 'has-error';
    this.helpBlock.color = 'Color is required';
   }


  onUpdateGoal(event) {
    this.goal = event.target.value;
  }

  onInvalidGoal() {
    this.validationState.goal = 'has-error';
    this.helpBlock.goal = 'Please enter goal amount';
  }


  onUpdateAbout(event) {
    this.about = event.target.value;
  }

  onInvalidAbout() {
    this.validationState.about = 'has-error';
    this.helpBlock.about = 'Say something about the team';
  }

  onInvalidAboutLength() {
    this.validationState.about = 'has-error';
    this.helpBlock.about = 'Must be between 150 and 500 characters';
  }

  onUpdateUsername(event) {
    this.username = event.target.value;
  }

  onInvalidUsername() {
    this.validationState.username = 'has-error';
    this.helpBlock.username = "Username is invalid or already taken";
  }

  onInvalidUsernameSpace() {
    this.validationState.username = 'has-error';
    this.helpBlock.username = "Username must NOT contain spaces";
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


  onUpdateCity(event) {
    this.team_city = event.target.value;
  }

  onInvalidCity() {
    this.validationState.team_city = 'has-error';
    this.helpBlock.team_city = 'City is required';
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