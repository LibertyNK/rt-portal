import alt from '../alt';
import UpdateTeamActions from '../actions/UpdateTeamActions';

class UpdateTeamStore {
	constructor() {

	    this.bindActions(UpdateTeamActions);
	    this.user = {};
	    
	    this.helpBlock = {

	        team_name: '',
	        team_type: '',
	        color: '',
	        about:'',
	        username: '',
	        address1: '',
	        address2: '',
	        team_city: '',
	        team_state: '',
	        zipcode: '',
	        country: ''
	          
	    };

	    this.validationState = {
	      	team_name: '',
	        team_type: '',
	        goal:'',
	        about:'',
	        username: '',
	       	address1: '',
	        address2: '',
	        team_city: '',
	        team_state: '',
	        zipcode: '',
	        country: ''
	   };

	    this.errorMessage = [];
	    this.errorMessageState = '';
    
  	}

	onUpdateTeamName(event) {
		this.team_name = event.target.value;
		if (this.team_name !== '') {
			this.validationState.team_name = 'has-success';
		}
	}

	onInvalidTeamName() {
		this.validationState.team_name = 'has-error';
		this.helpBlock.team_name = "Team Name can't be blank!";
		return
	}

	onUpdateTeamType(event) {
		this.team_type = event.target.value;
		if (this.team_type !== '') {
			this.validationState.team_type = 'has-success';
		}
	}

	onInvalidTeamType() {
		this.validationState.team_type = 'has-error';
		this.helpBlock.team_type = "Team type can't be blank!";
	}

	onUpdateColor(event) {
		this.color = event.target.value;
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
		this.helpBlock.about = 'Please enter goal amount';
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
		this.helpBlock.username = "Username must not contain spaces";
	}

	onUpdateAddress1(event) {
		this.address1 = event.target.value;
	}

	onInvalidAddress1() {
		this.validationState.address1 = 'has-error';
		this.helpBlock.address1 = 'Please enter Address';
	}

	onUpdateAddress2(event) {
		this.address2 = event.target.value;
	}

	onUpdateTeamCity(event) {
		this.team_city = event.target.value;
	}

	onInvalidTeamCity() {
		this.validationState.team_city = 'has-error';
		this.helpBlock.team_city = 'Please enter city';
	}

	onUpdateTeamState(event) {
		this.team_state = event.target.value;
	}

	onInvalidTeamState() {
		this.validationState.team_state = 'has-error';
		this.helpBlock.team_state = 'Please enter state';
	}

	onUpdateZipCode(event) {
		this.zipcode = event.target.value;
	}

	onInvalidZipCode() {
		this.validationState.zipcode = 'has-error';
		this.helpBlock.zipcode = 'Please enter zip code';
	}

	onUpdateCountry(event) {
		this.country = event.target.value;
	}

	onInvalidCountry() {
		this.validationState.country = 'has-error';
		this.helpBlock.country = 'Please enter country';
	}

	onUpdateSuccess(data) {

		this.errorMessage = data.message;
		if (data.message == 'success') {
	  		this.errorMessageState = 'alert alert-success text-center';
		} 
		else {
	  		this.errorMessageState = 'alert alert-danger';
		}   
	}

	onUpdateFail(error) {
	console.log(error);

	for (var i in error.responseJSON.message.errors) {
		this.errorMessage.push(error.responseJSON.message.errors[i].message);
	}
	
	this.errorMessageState = 'alert alert-danger';
	
	}

}

export default alt.createStore(UpdateTeamStore);