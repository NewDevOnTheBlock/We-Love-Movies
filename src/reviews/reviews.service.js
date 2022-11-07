const knex = require("../db/connection")

function list() {
    return knex("reviews as r")
        .join("movies as m", "m.movie_id", "r.movie_id")
        .join("critics as c", "c.critic_id", "r.critic_id")
        .select("*")
}

function read(reviewId) {
    return knex("reviews as r")
        .join("movies as m", "m.movie_id", "r.movie_id")
        .join("critics as c", "c.critic_id", "r.critic_id")
        .select("*")
        .where({ review_id: reviewId })
        .first()
}

module.exports = {
    list,
    read
}