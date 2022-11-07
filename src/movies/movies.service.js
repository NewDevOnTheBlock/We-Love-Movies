const knex = require("../db/connection")

// query for all movies
function listAllMovies() {
    return knex("movies").select("*")
}

// query for movies that are showing by combining the tables movies + movies_theaters
function listShowingMovies() {
    return knex("movies as m")
        .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
        .select("*")
}

// query for a specific movie based on the id in the parameters
function read(movieId) {
    return knex("movies")
        .select("*")
        .where({ movie_id: movieId })
        .first()
}

module.exports = {
    listAllMovies,
    listShowingMovies,
    read,
}