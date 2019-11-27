const Players = (connection, Sequelize, Teams) => {
    return connection.define('players', {
        id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
        firstName: { type: Sequelize.STRING },
        lastName: { type: Sequelize.STRING },
        position: { type: Sequelize.STRING },
        teamId: { type: Sequelize.INTEGER, reference: { model: Teams, key: 'id' } }
    }, { paranoid: true })
}

module.exports = Players