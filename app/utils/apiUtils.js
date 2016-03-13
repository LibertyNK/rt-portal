var $ = require('jquery');

module.exports = {

	// All API calls for users

	login: function(email, password) {
		return $.ajax({
			url: '/login',
			type: 'POST',
			data: { email: email, password : password}
		});
	},

	logout: function() {
		return $.ajax({
			url: '/logout',
			type: 'GET'
		});
	},

	signUp: function(user) {
		return $.ajax({
			url: '/users',
			type: 'POST',
			data: user
		});
	},

	displayDashboard: function() {
		return $.ajax({
			url: '/dashboard',
			type: 'GET'
		})
	},

	addTeam: function(team) {
		console.log("sending team to server, team: " +  team.team_name);
		return $.ajax({
			url: '/teams',
			type: 'POST',
			data: team
		});
	},

	getTeams: function() {
		return $.ajax({
			url: '/teams',
			type: 'GET'
		});
	},

	getTeam: function(team_uuid) {
		console.log("sending team to server, team: " +  team_uuid);
		return $.ajax({
			url: '/team/teamId/' + team_uuid,
			type: 'GET'
		})
	},

	findUser: function(username) {
		return $.ajax({
			url: '/users/username/' + username,
			type: 'GET'
		})
	},

	findTeam: function(team_name) {
		return $.ajax({
			url: '/team/teamName/' + team_name,
			type: 'GET'
		})
	},

	findTeamUsers: function(team_id) {
		return $.ajax({
			url: '/users/team/teamId/' + team_id,
			type: 'GET'
		})
	},

	updateUser: function(user) {
		return $.ajax({
			url: '/users/userId/' + user.uuid,
			type: 'PUT',
			data: user
		})
	},


	// API calls for teams

	// API calls for events

};
