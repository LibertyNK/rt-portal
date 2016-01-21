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

	logIn(email, password) {
		$.ajax({
			type: 'POST',
			url: '/login',
			data: { email: email, password : password}
		})
		.done((data) => {
			this.actions.logInSuccess(data.message);
			console.log('success ' + data.message);
		})
		.fail((jqXhr) => {
			this.actions.logInFail(jqXhr.responseJSON.message);
			console.log('failed ' + jqXhr.responseJSON.message);
		});
	}
}

export default alt.createActions(LogInActions);