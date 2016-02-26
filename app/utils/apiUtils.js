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

	getTeam: function(team_id) {
		return $.ajax({
			url: 'teams/' + team_id,
			type: 'GET'
		})
	},

	findUser: function(username) {
		return $.ajax({
			url: '/users/' + username,
			type: 'GET'
		})
	},

	findTeam: function(team_name) {
		return $.ajax({
			url: '/teams/' + team_name,
			type: 'GET'
		})
	},

	updateUser: function(user) {
		return $.ajax({
			url: '/updateUser',
			type: 'POST',
			data: user
		})
	},


	// API calls for teams

	// API calls for events

};
