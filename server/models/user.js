var Sequelize = require('sequelize')

var attributes = {
  // uuid: { // Unique universal ID, if we choose to use this, won't have duplicate IDs for user vs team vs event, etc...
  //   type: Sequelize.UUID,
  //   defaultValue: Sequelize.UUIDV4,
  //   primaryKey: true
  // },
  // username: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   unique: true,
  //   validate: {
  //     is: /^[a-z0-9\_\-]+$/i,
  //   }
  // },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  salt: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.BLOB,
  },
  admin_level: {
    type: Sequelize.INTEGER,
  },
  last_login: {
    type: Sequelize.DATE,
  },
  team: {
    type: Sequelize.UUID
  }
  //TODO: set up relationship between use and team, and set referencesKey in both tables accordingly
}

var options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options