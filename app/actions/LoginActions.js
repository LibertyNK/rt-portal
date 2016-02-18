import alt from '../alt';
import ApiUtils from '../utils/apiUtils';
import { LOGIN_USER, LOGOUT_USER } from '../constants/actionTypes';
import LogInStore from '../stores/LogInStore';


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
		AuthService.login(email, password)
		.done((response) => {
			this.actions.logInSuccess(response);
			console.log('Token from server: ' + response.token);
			var savedJwt = localStorage.getItem(response.token);
		})
		.fail((jqXhr) => {
			this.actions.logInFail(jqXhr.responseJSON.message);
		});
	}

}

export default alt.createActions(LogInActions);