const knex = require("../db/connection")

function listAllMovies() {
    return knex("movies as m").select("*")
}

function listShowingMovies() {
    return knex("movies as m")
        .join("movies_theaters as mt", "m.movie_id", "mt.movie_id")
        .select("*")
}



function read(movieId) {
    return knex("movies as m")
        .select("*")
        .where({ movie_id: movieId })
        .then(data => data)
}

module.exports = {
    listAllMovies,
    listShowingMovies,
    read,
}