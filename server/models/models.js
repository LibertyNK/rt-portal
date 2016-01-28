var TeamMeta = require('./Team.js')
var UserMeta = require('./User.js')
var EventMeta = require('./Event.js')
var CampaignMeta = require('./Campaign.js')

var sequelize = require('../config/sequelize.js')

/**
 * Create the models, with attributes, options from individual Model files
 */
var Team = sequelize.define('teams', TeamMeta.attributes, TeamMeta.options)
var User = sequelize.define('users', UserMeta.attributes, UserMeta.options)
var Event = sequelize.define('events', EventMeta.attributes, EventMeta.options)
var Campaign = sequelize.define('campaigns', CampaignMeta.attributes, CampaignMeta.options)


/**
 * Relationships defined here
 */
User.belongsTo(Team) // User has foreign key team_id


module.exports.Campaign = Campaign
module.exports.Event = Event
module.exports.Team = Team
module.exports.User = User