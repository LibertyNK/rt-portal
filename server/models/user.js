var Sequelize = require('sequelize')

var attributes = {
  uuid: { // Unique universal ID, if we choose to use this, won't have duplicate IDs for user vs team vs event, etc...
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: {
              msg: "Email address must be unique"
    },
    validate: {
      isEmail: {
        msg: "Email address must be valid"
      }
    }
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
                len: {
                    args: 3,
                    msg: "Username must be at least 3 characters in length"
                }
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
     validate: {
                len: {
                    args: 6,
                    msg: "Password must be at least 6 characters in length"
                }
            }
  },
  salt: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.BLOB,
  },
  admin_level: {
    type: Sequelize.INTEGER,
    defaultValue: 3
  },
  last_login: {
    type: Sequelize.DATE,
  },
  amount_raised: {
    type: Sequelize.INTEGER,
  },
  goal: {
    type: Sequelize.INTEGER,
  },
  about: {
    type: Sequelize.TEXT,
    validate: {
          len: [0,140]
      }
  }
}

var options = {
  freezeTableName: true,
  underscored: true
}

module.exports.attributes = attributes
module.exports.options = options