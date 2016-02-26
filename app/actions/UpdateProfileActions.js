import alt from '../alt';
import ApiUtils from '../utils/apiUtils';
import LogInStore from '../stores/LogInStore';
import RouterContainer from '../services/RouterContainer';
import LogInActions from '../actions/LogInActions';
import jwt_decode from 'jwt-decode';
import {LOGIN_USER, LOGOUT_USER} from '../constants/ActionTypes';

class UpdateProfileActions {
		constructor() {
		this.generateActions(
			'updateSuccess',
			'updateFail',
			'updateFirstName',
			'updateLastName',
			'updateUsername',
			'updateEmail',
			'invalidEmail',
			'invalidFirstName',
			'invalidLastName',
			'invalidUsername',
			'invalidUsernameSpace',
			'invalidPassword',
			'invalidPasswordLength',
			'invalidPasswordConf',
			'unmatchPasswords',
			'displayErrorMessage',
			'updateAbout',
			'updateGoal',
			'invalidGoal'
		);
	}


	update(userdata) {
		console.log("made it to Profile Actions: " + userdata);
		ApiUtils.updateUser(userdata)
			.done((data) => {
				if(data.type == 'success') {
					console.log(data);

					localStorage.setItem('jwt', data.token);	
					let user = jwt_decode(data.token);
					window.location.href ='/update-profile';
				
				} else {
					console.log('Error Message from server: ' + data.message);
					this.actions.updateFail(data);
					this.actions.displayErrorMessage(data.error);
				}
		})
		.fail((jqXhr) => {
			this.actions.updateFail(jqXhr);
			console.log('Error Message from server: ' + jqXhr.responseJSON.message.errors);
			this.actions.displayErrorMessage(jqXhr.responseJSON.message);
		});
		
	}

}

export default alt.createActions(UpdateProfileActions);