import alt from '../alt';


class LogInActions {

	constructor() {
		this.generateActions(
			'updateUsername',
			'updatePassword',
			'logInSuccess',
			'logInFail'
		);
	}

	logIn(username, password) {
		$.ajax({
			type: 'POST',
			url: '/login',
			data: { username: username, password : password}
		})
		.done((data) => {
			this.actions.logInSuccess(data.message);
			console.log('success ' + data.message);
		})
		.fail((jqXhr) => {
			this.actions.logInFail(jqXhr.responseJSON.message);
			console.log('success ' + jqXhr.responseJSON.message);
		});
	}
}

export default alt.createActions(LogInActions);