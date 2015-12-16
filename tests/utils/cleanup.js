var Model = require('../../server/models/models.js')

module.exports = function(callback) {
  // recreate User table
  Model.User.sync({ force: true }).then(function() {
    // create username with username: user and 
    // password: user
    Model.User.create({
      username: 'user',
      password: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O9D93HKwPKFNWBqiiuc/IoMtIurRCT36',
      salt: '$2a$10$QaT1MdQ2DRWuvIxtNQ1i5O'
    }).then(callback)
  })
 
  // recreate Team table
  Model.Team.sync({ force: true }).then(function() {
    Model.Team.create({
      teamname: 'Team Awesome'
    }).then(callback)
  })
  
  // recreate Event table
  Model.Event.sync({ force: true }).then(function() {
    Model.Event.create({
      eventname: 'First Event'
    }).then(callback)
  })
  
  // recreate Campaign table
  Model.Campaign.sync({ force: true }).then(function() {
    Model.Campaign.create({
      campaignname: 'Do awesome shtuff'
    }).then(callback)
  })
    
}