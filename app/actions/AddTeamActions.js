import alt from '../alt';

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
			'updateCountry',
			'updateAbout',
			'invalidTeamName',
			'invalidTeamNameLength',
			'isUniqueTeamName',
			'invalidAddress1',
			'invalidAddress2',
			'invalidState',
			'invalidZipcode',
			'invalidCountry',
			'invalidAbout',
			'invalidAboutLength',
			'dipslayErrorMessage'
		);
	}
}

export default alt.createActions(AddTeamActions);