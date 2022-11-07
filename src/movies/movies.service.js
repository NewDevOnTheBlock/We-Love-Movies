const knex = require("../db/connection")

function listAllMovies() {
    return knex("movies").select("*")
}

function listShowingMovies() {
    return knex("movies as m")
        .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
        .select("*")
}

function read(movieId) {
    return knex("movies")
        .select("*")
        .where({ movie_id: movieId })
}

module.exports = {
    listAllMovies,
    listShowingMovies,
    read,
}