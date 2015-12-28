import alt from '../alt';
import {assign} from 'underscore';

class NavbarActions {

	constructor() {
		this.generateActions(
			'updateOnlineUsers',
			'updateAjaxAnimation',
			'updateSearchQuery'
		);
	}

	findCharacter(payload) {
		$.ajax({
			url: '/api/teams/search/',
			data: { name: payload.searchQuery }
		})
		.done((data) => {
			assign(payload, data);
			this.actions.findTeamSuccess(payload);
		})
		.fail(() => {
			this.actions.findTeamFail(payload);
		})
	}

	getTeamCount() {
		$.ajax({ url: '/api/teams/count' })
			.done((data) => {
				this.actions.getTeamCountSuccess(data)
			})
			.fail((jqXhr) => {
				this.actions.getTeamCountFail(jqXhr)
			});
	}
}

export default alt.createActions(NavbarActions);