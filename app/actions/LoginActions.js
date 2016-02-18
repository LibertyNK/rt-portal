import alt from '../alt';
import ApiUtils from '../utils/apiUtils';
import { LOGIN_USER, LOGOUT_USER } from '../constants/actionTypes';


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
		console.log("sending login info");
		ApiUtils.login(email, password)
		.done((response) => {
			this.actions.logInSuccess(response);
			console.log('Token from server: ' + response.token);
		})
		.fail((jqXhr) => {
			this.actions.logInFail(jqXhr.responseJSON.message);
		});
	}

	logInUser(jwt) {
		var savedJwt = localStorage.getItem('jwt');
	}
}

export default alt.createActions(LogInActions);