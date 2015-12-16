var UserMeta = require('./User.js')
var TeamMeta = require('./Team.js')
var EventMeta = require('./Event.js')
var CampaignMeta = require('./Campaign.js')

var sequelize = require('../config/sequelize.js')

var User = sequelize.define('users', UserMeta.attributes, UserMeta.options)
var Team = sequelize.define('teams', TeamMeta.attributes, TeamMeta.options)
var Event = sequelize.define('events', EventMeta.attributes, EventMeta.options)
var Campaign = sequelize.define('campaigns', CampaignMeta.attributes, CampaignMeta.options)


// Relationships defined here
// Team.hasMany(User, {as: 'Members'})
// Team.hasMany(Event)
// Team.hasMany(Campaign)


module.exports.Campaign = Campaign
module.exports.Event = Event
module.exports.Team = Team
module.exports.User = User