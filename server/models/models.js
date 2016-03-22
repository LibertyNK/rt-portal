var TeamMeta = require('./team.js')
var UserMeta = require('./user.js')
var EventMeta = require('./event.js')
var CampaignMeta = require('./campaign.js')
var AffiliationMeta = require('./affiliation.js')

var sequelize = require('../config/sequelize.js')

/**
 * Create the models, with attributes, options from individual Model files
 */
var User = sequelize.define('users', UserMeta.attributes, UserMeta.options)
var Team = sequelize.define('teams', TeamMeta.attributes, TeamMeta.options)
var Event = sequelize.define('events', EventMeta.attributes, EventMeta.options)
var Campaign = sequelize.define('campaigns', CampaignMeta.attributes, CampaignMeta.options)
var Affiliation = sequelize.define('affiliations', AffiliationMeta.attributes, AffiliationMeta.options)


/**
 * Relationships defined here
 */
 
// Both of the following declarations are needed to establish the many:many relationship between users and teams
User.belongsToMany( Team, {
	// as: 'user',
	through: 'affiliations',
	foreignKey: 'user_id'
})
Team.belongsToMany( User, {
	// as: 'team',
	through: 'affiliations',
	foreignKey: 'team_id'
})

module.exports.Campaign = Campaign
module.exports.Event = Event
module.exports.Team = Team
module.exports.User = User
module.exports.Affiliation = Affiliation