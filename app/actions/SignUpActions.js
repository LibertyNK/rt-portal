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
			'updatePasswordConf'
		);
	}

	signUp(userdata) {
		ApiUtils.signUp(userdata)
		.done((data) => {
			this.actions.signUpSuccess(data);
			console.log('Message from server: ' + data.user);

		})
		.fail((jqXhr) => {
			this.actions.signUpFail(jqXhr.responseJSON.message);
			console.log('Message from server: ' + jqXhr.responseJSON.message);
		});
	}
}

export default alt.createActions(SignUpActions);