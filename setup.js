var Model = require('./server/models/models.js')

// recreate user table with sample user
Model.User.sync({ force: true })
  .then(function() {
    // create user with
    // email: user@user.com
    // password: user
    Model.User.create({
      uuid: '00356000003EbIO',
      email: 'user@user.com',
      username: 'username',
      first_name: 'User',
      last_name: 'McUser',
      password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
    })
  .error(function(error) {
  	console.log("Error cleaning DB: ", error)
  })
})

// recreate Team table
Model.Team.sync({ force: true })
	.then(function() {
	  Model.Team.create({
	    uuid: '00156000003o1vJAAQ',
	    team_name: 'Team Awesome'
	  })
  .error(function(error) {
  	console.log("Error cleaning DB: ", error)
  })
})

// recreate Event table
Model.Event.sync({ force: true })
	.then(function() {
	  Model.Event.create({
	    event_name: 'First Event'
	  })
  .error(function(error) {
  	console.log("Error cleaning DB: ", error)
  })  
})

// recreate Campaign table
Model.Campaign.sync({ force: true })
	.then(function() {
	  Model.Campaign.create({
	    campaign_name: 'Do awesome shtuff'
	  })
  .error(function(error) {
  	console.log("Error cleaning DB: ", error)
  })
})
	
// process.exit()