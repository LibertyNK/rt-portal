import alt from '../alt';
import NewTeamFormActions from '../actions/NewTeamFormActions';

class NewTeamFormStore {
	constructor() {
		this.bindActions(NewTeamFormActions);
		this.name = '';
		this.about = '';
		this.location = '';
		this.amount = 0;
	}
}

export default alt.createStore(NewTeamFormStore);