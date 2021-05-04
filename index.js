const express = require('express')
const bodyParser = require('body-parser')
const movies = require('./movies.js')
const { getAllMovies, getByString, saveNewMovie } = require('./controller/movies')


const app = express()

app.get('/', getAllMovies)

app.get('/movies/:searchString', getByString)


app.post('/movies', bodyParser.json(), saveNewMovie)



app.listen(1567, () => {
  console.log('listening on port 1567...')// eslint-disable-line no-console
})
