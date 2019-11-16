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
    matchingTeam.length
    response.send(matchingTeam)
})


const server = app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = server