import alt from '../alt';
import UpdateTeamActions from '../actions/UpdateTeamActions';

class UpdateTeamStore {
	constructor() {
		this.bindActions(UpdateTeamActions);
		this.name = '';
		this.about = '';
		this.location = '';
		this.amount = 0;
	}
}

export default alt.createStore(UpdateTeamStore);