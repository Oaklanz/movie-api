const movies = require('../movies.js')

const getAllMovies = (request, response) => {
  return response.send(movies)
}

const getByString = (request, response) => {
  const { searchString } = request.params
    const foundDirectors = movies.filter((movie) => {
      return movie.directors.includes(searchString) ||
       movie.title.includes(searchString)
    })

    return response.send(foundDirectors)
  }

  const saveNewMovie = (request, response) => {
console.log(request.body)
    //const {movies} = request.movies

  }


module.exports = {
    getAllMovies,
    getByString,
    saveNewMovie
}