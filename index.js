const bodyParser = require('body-parser')
const express = require('express')
const Sequelize = require('sequelize')
const models = require('./models')

const app = express()

app.get('/teams', async (request, response) => {
    const teams = await models.Teams.findAll()
    response.send(teams)
})

app.get('/teams/:id', async (request, response) => {
    const Op = Sequelize.Op
    const matchingTeam = await models.Teams.findAll({
        where: {
            [Op.or]: [{ id: request.params.id }, { abbreviation: request.params.id }]
        }
    })
    if (matchingTeam.length) {
        response.send(matchingTeam)
    } else {
        response.sendStatus(404)
    }
})

app.use(bodyParser.json())

app.post('/teams', async (request, response) => {
    const { location, mascot, abbreviation, conference, division } = request.body
    if (!location || !mascot || !abbreviation || !conference || !division) {
        response.status(400).send('The following fields are required: location, mascot, abbreviation, conference, division')
    }


    const newTeam = await models.Teams.create({ location, mascot, abbreviation, conference, division })

    response.sendStatus(201).send(newTeam)
})

const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server