import alt from '../alt';
import ApiUtils from '../utils/apiUtils';



class SignUpActions {

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
			'invalidPassword',
			'invalidPasswordLength',
			'invalidPasswordConf',
			'unmatchPasswords',
			'displayErrorMessage'
		);
	}

	signUp(userdata) {
		ApiUtils.signUp(userdata)
			.done((data) => {
				if(data.message == 'success') {
					console.log('Success Message from server: ' + data.message);
					window.location.href = "/signup_success";
					this.actions.signUpSuccess(data);
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

export default alt.createActions(SignUpActions);