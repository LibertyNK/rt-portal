import alt from '../alt';


class LogInActions {

	constructor() {
		this.generateActions(
			'updateEmail',
			'updatePassword'
		);
	}
}

export default alt.createActions(LogInActions);