import alt from '../alt';
import ApiUtils from '../utils/apiUtils';
import LogInStore from '../stores/LogInStore';
import RouterContainer from '../services/RouterContainer';
import LogInActions from '../actions/LogInActions';
import {LOGIN_USER, LOGOUT_USER} from '../constants/ActionTypes';

class UpdateTeamActions {
		constructor() {
		this.generateActions(
			'updateSuccess',
			'updateFail',
			'updateTeamName',
			'updateTeamType',
			'updateColor',
			'updateGoal',
			'updateAbout',
			'updateUsername',
			'invalidTeamName',
			'invalidTeamType',
			'invalidColor',
			'invalidGoal',
			'invalidUsername',
			'invalidUsernameSpace',
			'updateAddress1',
			'updateAddress2',
			'updateTeamCity',
			'updateTeamState',
			'updateZipCode',
			'updateCountry',
			'invalidAddress1',
			'invalidAddress2',
			'invalidTeamCity',
			'invalidTeamState',
			'invalidZipCode',
			'invalidCountry',
			'displayErrorMessage'
		);
	}


	update(userdata) {
		ApiUtils.updateTeam(userdata)
			.done((data) => {
				if(data.type == 'success') {
					console.log("made it to success");	
					window.location.href ='/update-team';
				
				} else {
					console.log('Error Message from server: ' + data.message);
					console.log('made it in but failed');
					this.actions.updateFail(data);
					this.actions.displayErrorMessage(data.error);
				}
		})
		.fail((jqXhr) => {
			this.actions.updateFail(jqXhr);
			console.log('Error Message from server: ' + jqXhr.responseJSON.message.errors);
			this.actions.displayErrorMessage(jqXhr.responseJSON.message);
		});
		
	}

}

export default alt.createActions(UpdateTeamActions);