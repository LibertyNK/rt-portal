var $ = require('jquery');

module.exports = {

	// All API calls for users

	login: function(data) {
		console.log(data.email + " " + data.password);
		return $.ajax({
			url: '/login',
			type: 'POST',
			data: {email : data.email, password : data.password}
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
	}

	// API calls for teams

	// API calls for events

};
