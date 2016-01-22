import alt from '../alt';
import ApiUtils from '../utils/apiUtils';


class LogInActions {

	constructor() {
		this.generateActions(
			'updateEmail',
			'updatePassword',
			'logInSuccess',
			'logInFail'
		);
	}

	logIn(email, password) {
		ApiUtils.login(email, password)
		.done((data) => {
			this.actions.logInSuccess(data.message);
			console.log('Message from server: ' + data.message);
		})
		.fail((jqXhr) => {
			this.actions.logInFail(jqXhr.responseJSON.message);
		});
		
	}

}

export default alt.createActions(LogInActions);