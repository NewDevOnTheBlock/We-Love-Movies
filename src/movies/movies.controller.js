const express = require("express")
const moviesService = require("./movies.service")

async function list(req, res, next) {
    const allMovies = await moviesService.list()
    res.json({ data: allMovies })
}


module.exports = {
    list,
}