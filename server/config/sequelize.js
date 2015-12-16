var Sequelize = require('sequelize'),
    sequelize = new Sequelize('postgres://root:password@localhost:5432/LinkReactNode')

module.exports = sequelize