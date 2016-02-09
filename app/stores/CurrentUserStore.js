import alt from '../alt';
import Immutable from 'immutable';
import SignUpActions from '../actions/SignUpActions';

class CurrentUserStore {

	constructor() {
		
		this.user= Immutable.Map({});
	}

	onSignUpSuccess(data) {
		this.user = data.username;
		console.log(this.username);
	}
}

export default alt.createStore(CurrentUserStore);