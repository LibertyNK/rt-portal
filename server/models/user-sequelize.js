var Sequelize = require('sequelize');
var sequelize = require('../config/sequelize');
var passportLocalSequelize = require('passport-local-sequelize');
var bcrypt = require('bcrypt-nodejs');

/** Default passport-local-sequelize User Schema:
var defaultUserSchema = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    hash: {
        type: Sequelize.STRING,
        allowNull: false
    },
    salt: {
        type: Sequelize.STRING,
        allowNull: false
    },
    activationKey: {
        type: Sequelize.STRING,
        allowNull: true
    },
    resetPasswordKey: {
        type: Sequelize.STRING,
        allowNull: true
    },
    verified: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
};
*/

var User = passportLocalSequelize.defineUser(sequelize, {
	first_name: Sequelize.STRING,
	last_name: Sequelize.STRING,
	email: Sequelize.STRING,
	image: Sequelize.BLOB,
	admin_level: Sequelize.INTEGER,
	team_id: Sequelize.INTEGER,
	last_login: Sequelize.DATE
})

User.sync(); // May or may not actually need this?

/** Alternative way to define User
var User = sequelize.define('User', {
  id: Sequelize.STRING,
  uid: Sequelize.STRING,
  name: Sequelize.STRING,
  myhash: Sequelize.STRING,
  mysalt: Sequelize.STRING
}, {
	freezeTableName: true // model tableName will be the same as the model name
});

passportLocalSequelize.attachToUser(User, {
	id: 'id',
	uid: 'uid',
	name: 'name', 
	hashField: 'myhash',
	saltField: 'mysalt'
})
*/

module.exports = User;