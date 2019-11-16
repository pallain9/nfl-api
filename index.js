const bodyParser = require('body-parser')
const express = require('express')
const teams = require('./teams.json')

const app = express()

app.get('/teams', (request, response) => {
    response.send(teams)
})

app.get('/teams/:id', (request, response) => {
    const matchingTeam = teams.filter((team) => {
        return team.id === parseInt(request.params.id) || team.abbreviation.toUpperCase() === request.params.id.toUpperCase()
    })
    if (matchingTeam.length) {
        response.send(matchingTeam)
    } else {
        response.sendStatus(404)
    }
})

app.use(bodyParser.json())
app.post('/teams', (request, response) => {
    const { id, location, mascot, abbreviation, conference, division } = request.body
    if (!id || !location || !mascot || !abbreviation || !conference || !division) {
        response.sendStatus(400).send('The following fields are required: id, location, mascot, abbreviation, conference, division')
    }
    const newTeam = { id, location, mascot, abbreviation, conference, division }
    teams.push({ id, location, mascot, abbreviation, conference, division })
    response.sendStatus(201).send(newTeam)
})

const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server