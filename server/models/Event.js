var Sequelize = require('sequelize')

var attributes = {
	uuid: { // Unique universal ID, if we choose to use this, won't have duplicate IDs for user vs team vs event, etc...
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  event_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  about: {
    type: Sequelize.TEXT,
  },
  image: {
    type: Sequelize.BLOB,
  },
  goal: {
    type: Sequelize.STRING,
  },
  amount_raised: {
    type: Sequelize.DECIMAL,
  },
  ending_message: {
    type: Sequelize.TEXT,
  },
  comments: {
    type: Sequelize.TEXT,
  },
  date_start: {
  	type: Sequelize.DATE,
  },
  date_end: {
  	type: Sequelize.DATE,
  }
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options