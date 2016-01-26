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

	addTeam: function(team, user) {
		return $.ajax({
			url: '/teams',
			type: 'POST',
			data: {team: team, user: user}
		});
	},

	getTeam: function(team_id) {
		return $.ajax({
			url: 'teams/' + team_id,
			type: 'GET'
		})
	}


	// API calls for teams

	// API calls for events

};
