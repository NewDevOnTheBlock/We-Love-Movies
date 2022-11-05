const knex = require("knex")

function list() {
    return knex("movies")
        .select("*")
        .then(data => data)
}

module.exports = {
    list,
}