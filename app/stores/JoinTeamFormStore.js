import alt from '../alt';
import JoinTeamFormActions from '../actions/JoinTeamFormActions';

class JoinTeamFormStore {
	constructor() {
		this.bindActions(JoinTeamFormActions);
		this.name = '';
		this.about = '';
		this.location = '';
		this.amount = 0;
	}
}

export default alt.createStore(JoinTeamFormStore);