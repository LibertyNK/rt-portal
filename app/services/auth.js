import LogInActions from '../actions/LogInActions';

class AuthService {

	logIn(username, password) {
		return this.handleAuth(when(request({
			url: LOGIN_URL,
			method: 'POST',
			type: 'json',
			data: { username, password }
		})));
	}

	logOut() {
		LogInActions.logOutUser();
	}

	handleAuth(logInPromise) {
		return logInPromise
			.then(response => {
				var jwt = response.id_token;
				console.log("handle Auth " + jwt);
				LogInActions.logInUser(jwt);
				return true;
			})
	}
}

export default new AuthService();