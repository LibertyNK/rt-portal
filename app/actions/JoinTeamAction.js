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
			this.actions.signUpSuccess(data.message);
			console.log('Message from server: ' + data.message);
		})
		.fail((jqXhr) => {
			this.actions.signUpFail(jqXhr.responseJSON.message);
		});
	}
}

export default alt.createActions(SignUpActions);