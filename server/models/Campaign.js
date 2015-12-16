var Sequelize = require('sequelize')

var attributes = {
	uuid: { // Unique universal ID, if we choose to use this, won't have duplicate IDs for user vs team vs event, etc...
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  campaign_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      is: /^[a-z0-9\_\-]+$/i,
    }
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
  }
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