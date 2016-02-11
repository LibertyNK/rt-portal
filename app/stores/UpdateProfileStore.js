import alt from '../alt';
import UpdateProfileActions from '../actions/UpdateProfileActions';

class UpdateProfileStore {
	constructor() {
		this.bindActions(UpdateProfileActions);
		this.name = '';
		this.about = '';
		this.location = '';
		this.amount = 0;
	}
}

export default alt.createStore(UpdateProfileStore);