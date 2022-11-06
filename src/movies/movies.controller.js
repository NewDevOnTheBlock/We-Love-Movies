const moviesService = require("./movies.service")

// asyncErrorBoundary
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
// validate movie existence
async function movieExists(req, res, next) {
    const { movieId } = req.params;
    const foundMovie = moviesService.read(movieId);
    if (foundMovie) {
        res.locals.movie = foundMovie;
        return next()
    }
    next({
        status: 404,
        message: `A movie with the ID of ${movieId} could not be found.`,
    })
}

// list all movies

// if there is a query parameter:
// run a service function that returns a list of movies joined with the movies_theaters table
// filter through the list of movies returned from the joined tables
// check if they have an "is_showing" property, and if it's set to true filter out those movies
// store them and return them to the user

async function list(req, res, next) {
    const { is_showing } = req.query;
    if (is_showing) {
        const allMovies = await moviesService.listShowingMovies()
        const listedMovies = allMovies.filter(movie => movie.is_showing === "true")
        res.json({ data: listedMovies })
    } else {
        const allMovies = await moviesService.listAllMovies()
        res.json({ data: allMovies})
    }
}

async function read(req, res, next) {
    res.json({ data: res.locals.movie })
}

module.exports = {
    list,
    read: [
        asyncErrorBoundary(movieExists), 
        asyncErrorBoundary(read),
    ],
    movieExists,
}