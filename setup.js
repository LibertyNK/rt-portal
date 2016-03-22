var Model = require('./server/models/models.js')

var user1, team1;

// recreate Affiliation table
Model.Affiliation.sync({ force: true })
	.then(function() {
		// recreate Team table
		Model.Team.sync({ force: true })
			.then(function() {
			  team1 = Model.Team.build({
			    uuid: '00156000003o1vJAAQ',
			    team_name: 'Team Awesome'
			  })
			  team1.save()
			  	.then(function() {
			  		// recreate user table with sample user
						Model.User.sync({ force: true })
						  .then(function() {
						    // create user with
						    // email: user@user.com
						    // password: user
						    user1 = Model.User.build({
						      uuid: '00356000003EbIO',
						      email: 'user@user.com',
						      username: 'username',
						      first_name: 'User',
						      last_name: 'McUser',
						      password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
						      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
						    })
								user1.save()
									.then(function() {
										team1.addUser(user1, {id: 'a0C56000000WH3KEAW'})
									})
						  .error(function(error) {
						  	console.log("Error setting up User model: ", error)
						  })
						})
			  	})
		  .error(function(error) {
		  	console.log("Error setting up Team model: ", error)
		  })
		})		
	})
.error(function(error) {
	console.log("Error setting up Team model: ", error)
})

// recreate Event table
Model.Event.sync({ force: true })
	.then(function() {
	  Model.Event.create({
	    event_name: 'First Event'
	  })
  .error(function(error) {
  	console.log("Error setting up Event model: ", error)
  })  
})

// recreate Campaign table
Model.Campaign.sync({ force: true })
	.then(function() {
	  Model.Campaign.create({
	    campaign_name: 'Do awesome shtuff'
	  })
  .error(function(error) {
  	console.log("Error setting up Campaign model: ", error)
  })
})
	
