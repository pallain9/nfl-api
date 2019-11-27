const Sequelize = require('sequelize')
const TeamsModel = require('./teams')
const PlayersModel = require('./players')
const connection = new Sequelize('football', 'root', 'Brayden9!', {
    host: 'localhost',
    dialect: 'mysql'
})


const Teams = TeamsModel(connection, Sequelize)
const Players = PlayersModel(connection, Sequelize, Teams)


Teams.hasMany(Players)
Players.belongsTo(Teams)


module.exports = {
    Teams,
    Players,
}