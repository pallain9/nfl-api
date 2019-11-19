const Sequelize = require('sequelize')
const TeamsModel = require('./teams')

const connection = new Sequelize('football', 'root', 'Brayden9!', {
    host: 'localhost',
    dialect: 'mysql'
})

const Teams = TeamsModel(connection, Sequelize)

module.exports = {
    Teams
}