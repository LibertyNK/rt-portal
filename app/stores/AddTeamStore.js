import alt from '../alt';
import AddTeamActions from '../actions/AddTeamActions';

class AddTeamStore {
  constructor() {
    this.bindActions(AddTeamActions);
  }
}

export default alt.createStore(AddTeamStore);