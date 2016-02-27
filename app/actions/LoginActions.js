import alt from '../alt';
import ApiUtils from '../utils/apiUtils';
import { LOGIN_USER, LOGOUT_USER } from '../constants/ActionTypes';
import LogInStore from '../stores/LogInStore';
import RouterContainer from '../services/RouterContainer';


class LogInActions {

	constructor() {
		this.generateActions(

			'updateEmail',
			'invalidEmail',

			'updatePassword',
			'invalidPassword',


			'logInSuccess',
			'logInFail'
		);
	}

	loginUser(jwt)  {
	  	console.log('loginUser called');
	    // Go to the Home page once the user is logged i
	    // We save the JWT in localStorage to keep the user authenticated. We’ll learn more about this later.
	    localStorage.setItem('jwt', jwt);
	    this.actions.logInSuccess(jwt);
	    // Send the action to all stores through the Dispatcher
    }

	logIn(email, password) {
		ApiUtils.login(email, password)
		.done((response) => {
			this.actions.logInSuccess(response.token);
			localStorage.setItem('jwt', response.token);	
			let user = jwt_decode(response.token);		
			window.location.href = '/' + user.username;
		})
		.fail((jqXhr) => {
			this.actions.logInFail(jqXhr.responseJSON.message);
		});
	}

}

export default alt.createActions(LogInActions);