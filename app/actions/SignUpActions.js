import alt from '../alt';
import apiUtil from '../utils/apiUtils.js';



class SignUpActions {

	constructor() {
		this.generateActions(
			'updateEmail',
			'updatePassword',
			'signUpSuccess',
			'signUpFail',
			'updateUsername',
			'updatePassword'
		);
	}

	signUp(username, password) {
		$.ajax({
			type: 'POST',
			url: '/signup',
			data: { username: username, password : password }
		})
		.done((data) => {
			this.actions.signUpSuccess(data.message);
			console.log('success ' + data.message);
		})
		.fail((jqXhr) => {
			this.actions.signUpFail(jqXhr.responseJSON.message);
		});
	}
}

export default alt.createActions(SignUpActions);