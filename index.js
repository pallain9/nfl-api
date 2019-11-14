const express = require('express')
const teams = require('./teams.json')

const app = express()

app.get('/teams', (request, response) => {
    response.send(teams)
})

app.get('/teams/:id', (request, response) => {
    //request.params.id
    const matchingTeam = teams.filter((team) => {
        return team.id === parseInt(request.params.id)
    })
    if (matchingTeam.length) {
        response.send(matchingTeam)
    } else {
        response.sendStatus(404)
    }
})

app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = app