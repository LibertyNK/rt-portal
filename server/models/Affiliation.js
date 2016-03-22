var Sequelize = require('sequelize')

var attributes = {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	status: Sequelize.STRING
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options