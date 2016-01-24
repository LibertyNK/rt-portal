import alt from '../alt';
import ApiUtils from '../utils/apiUtils';



class SignUpActions {

	constructor() {
		this.generateActions(
			'signUpSuccess',
			'signUpFail',
			'updateFirstName',
			'updateLastName',
			'updateEmail',
			'updatePassword',
			'updatePasswordConf',
			'invalidEmail',
			'invalidFirstName',
			'invalidLastName',
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
				console.log('Message from server: ' + data.message);
				this.actions.signUpSuccess(data);
				this.actions.displayErrorMessage(data.message);
			} else {
				this.actions.signUpFail(data);
				this.actions.displayErrorMessage(data.message);
			}

		})
		.fail((jqXhr) => {
			this.actions.signUpFail(jqXhr.responseJSON.message);
			console.log('Error Message from server: ' + jqXhr.responseJSON.message);
		});
	}
}

export default alt.createActions(SignUpActions);