const express = require('express')
const teams = require('./teams.json')

const app = express()

app.get('/teams', (request, response) => {
    response.send(teams)
})

app.get('/teams/:id', (request, response) => {
    let matchingTeam = teams.filter((team) => {
        return team.id === parseInt(request.params.id)
    })
    let matchingAbb = teams.filter((team) => {
        return team.abbreviation === (request.params.id.toUpperCase())
    })

    if (!isNaN(request.params.id)) {
        response.send(matchingTeam)
    } else {
        response.send(matchingAbb)
    }
})

app.listen(1337, () => { console.log('listening on port 1337') })

module.exports = app