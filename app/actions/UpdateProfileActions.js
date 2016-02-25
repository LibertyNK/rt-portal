import alt from '../alt';
import ApiUtils from '../utils/apiUtils';
import RouterContainer from '../services/RouterContainer';
import {LOGIN_USER, LOGOUT_USER} from '../constants/ActionTypes';

class UpdateProfileActions {
		constructor() {
		this.generateActions(
			'signUpSuccess',
			'signUpFail',
			'updateFirstName',
			'updateLastName',
			'updateUsername',
			'updateEmail',
			'updatePassword',
			'updatePasswordConf',
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
		ApiUtils.updateUser(userdata)
			.done((data) => {
				if(data.message == 'success') {
					console.log(data);
					console.log('Success Message from server: ' + data.message);
					
					this.actions.displayErrorMessage(data.message);

				
				} else {
					console.log('Error Message from server: ' + data.message);
					this.actions.signUpFail(data);
					this.actions.displayErrorMessage(data.error);
				}
		})
		.fail((jqXhr) => {
			this.actions.signUpFail(jqXhr);
			console.log('Error Message from server: ' + jqXhr.responseJSON.message.errors);
			this.actions.displayErrorMessage(jqXhr.responseJSON.message);
		});
		
	}

}

export default alt.createActions(UpdateProfileActions);