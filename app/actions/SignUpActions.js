import alt from '../alt';


class SignUpActions {

	constructor() {
		this.generateActions(
			'updateEmail',
			'updatePassword',
			'signUpSuccess',
			'signUpFail',
			'updatePassword'
		);
	}

	signUp(email, password) {
		$.ajax({
			type: 'POST',
			url: '/users',
			data: { email: email, password : password }
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