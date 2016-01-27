import alt from '../alt';
import ApiUtils from '../utils/apiUtils';

class AddTeamActions {

	constructor() {
		this.generateActions(
			'addTeamSuccess',
			'addTeamFail',
			'updateTeamName',
			'updateAddress1',
			'updateAddress2',
			'updateState',
			'updateZipcode',
			'invalidTeamName',
			'invalidTeamNameLength',
			'isUniqueTeamName',
			'invalidAddress1',
			'invalidAddress2',
			'invalidState',
			'invalidZipcode',
			'invalidAbout',
			'invalidAboutLength',
			'dipslayErrorMessage'
		);
	}

	addTeam(team) {
		ApiUtils.addTeam(team)
			.done((data) => {
				if(data.type === 'success') {
					console.log("action is receiving " + data.message + " message from server");
					this.actions.addTeamSuccess(data);
					this.actions.dipslayErrorMessage(data.message);
				} 
			})
			.fail((jqXhr) => {
				this.actions.addTeamFail(jqXhr.responseJSON.message);
				console.log("Error message from server: " + jqXhr.responseJSON.message);
			});
	}
}

export default alt.createActions(AddTeamActions);