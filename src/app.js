if (process.env.USER) require("dotenv").config();
const express = require("express");

// route handlers
const moviesRouter = require("./movies/movies.router")
const theatersRouter = require("./movie-theaters/movie-theaters.router")
const reviewsRouter = require("./reviews/reviews.router")

// create the express instance, store it in the app variable
const app = express();

// allow express to take a .json payload
app.use(express.json())

// define each route: movies, movie-theaters, reviews
app.use("/movies", moviesRouter)
app.use("/movie-theaters", theatersRouter)
app.use("/reviews", reviewsRouter)


module.exports = app;