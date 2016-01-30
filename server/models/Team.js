var Sequelize = require('sequelize')

var attributes = {
	uuid: { // Unique universal ID, if we choose to use this, won't have duplicate IDs for user vs team vs event, etc...
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  team_name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  about: {
    type: Sequelize.TEXT,
  },
  image: {
    type: Sequelize.BLOB,
  },
  amount_raised: {
    type: Sequelize.DECIMAL,
  },
  tier_level: {
    type: Sequelize.INTEGER,
  },
  address1: {
    type: Sequelize.STRING, 
  },
  address2: {
    type: Sequelize.STRING, 
  },
  team_state: {
    type: Sequelize.STRING, 
  },
  zipcode: {
    type: Sequelize.STRING, 
  },
  country: {
    type: Sequelize.STRING, 
  },
  leader: {
    type: Sequelize.STRING, //change this later to INTEGER TYPE for User_ID
    // references: 'users',
    referencesKey: 'id'
  }
  //TODO: set up relationship between use and team, and set referencesKey in both tables accordingly
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options