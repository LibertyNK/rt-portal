var Sequelize = require('sequelize')

var attributes = {
	id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: true,
    unique: true
	},
	// The following are fields from the Salesforce DB
	title: Sequelize.STRING,
	role: Sequelize.STRING,
	status: Sequelize.STRING
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options