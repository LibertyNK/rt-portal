var Sequelize = require('sequelize');

var attributes = {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  file_path: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  }

};

var options = {
  freezeTableName: true
};

module.exports.attributes = attributes;
module.exports.options = options;