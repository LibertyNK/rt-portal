var Sequelize = require('sequelize')

var attributes = {
	uuid: { // Unique universal ID, if we choose to use this, won't have duplicate IDs for user vs team vs event, etc...
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  campaignname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  about: {
    type: Sequelize.TEXT,
  },
  goal: {
    type: Sequelize.TEXT,
  },
  amount_raised: {
    type: Sequelize.DECIMAL,
  },
  date_start: {
  	type: Sequelize.DATE,
  },
  date_end: {
  	type: Sequelize.DATE,
  },
  ending_message: {
    type: Sequelize.TEXT,
  },
  comments: {
    type: Sequelize.TEXT,
  }
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options