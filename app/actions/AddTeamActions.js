import alt from '../alt';
import ApiUtils from '../utils/apiUtils';

class AddTeamActions {

	constructor() {
		this.generateActions(
			'addTeamSuccess',
			'addTeamFail',
			'updateTeamName',
			'updateStreet',
			'updateAddress',
			'updateState',
			'updateZipcode',
			'invalidTeamName',
			'invalidTeamNameLength',
			'isUniqueTeamName',
			'invalidAddress',
			'invalidStreet',
			'invalidState',
			'invalidZipcode',
			'invalidAbout',
			'invalidAboutLength',
			'dipslayErrorMessage'
		);
	}

	addTeam(team, user) {
		ApiUtils.addTeam(team, user)
			.done((data) => {
				if(data.type === 'success') {
					console.log(data.message);
					this.actions.addTeamSuccess(data);
					this.actions.dipslayErrorMessage(data.message);
				} else {
					console.log("fail");
					this.actions.addTeamFail(data);
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