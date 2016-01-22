import alt from '../alt';


class LogInActions {

	constructor() {
		this.generateActions(
			'updateEmail',
			'updatePassword',
			'logInSuccess',
			'logInFail'
		);
	}
	logIn(userdata) {
		ApiUtils.login(userdata)
		.done((data) => {
			this.actions.signUpSuccess(data.message);
			console.log('Message from server: ' + data.message);
		})
		.fail((jqXhr) => {
			this.actions.signUpFail(jqXhr.responseJSON.message);
		});
	}

}

export default alt.createActions(LogInActions);