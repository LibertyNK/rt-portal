import alt from '../alt';
import ApiUtils from '../utils/apiUtils';
import { LOGIN_USER, LOGOUT_USER } from '../constants/ActionTypes';
import LogInStore from '../stores/LogInStore';
import RouterContainer from '../services/RouterContainer'


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

	loginUser(jwt){
	    // Go to the Home page once the user is logged in
	    RouterContainer.get().transitionTo('/');
	    // We save the JWT in localStorage to keep the user authenticated. We’ll learn more about this later.
	    localStorage.setItem('jwt', jwt);

	  }

}

export default alt.createActions(LogInActions);