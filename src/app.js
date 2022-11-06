if (process.env.USER) require("dotenv").config();
const express = require("express");
// create the express instance, store it in the app variable
const app = express();
// route handlers
const moviesRouter = require("./movies/movies.router")
const theatersRouter = require("./theaters/theaters.router")
const reviewsRouter = require("./reviews/reviews.router");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/routeNotFound");

// allow express to take a .json payload
app.use(express.json())

// define each route: movies, movie-theaters, reviews
app.use("/movies", moviesRouter)
app.use("/theaters", theatersRouter)
app.use("/reviews", reviewsRouter)

// error handlerss
app.use(notFound)
app.use(errorHandler)

module.exports = app;