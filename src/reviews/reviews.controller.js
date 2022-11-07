const reviewsService = require("./reviews.service");
// asyncErrorBoundary
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

// validation middleware

// validate review existence
async function reviewExists(req, res, next) {
    const { reviewId } = req.params;
    const review = await reviewsService.read(reviewId);
    if (review) {
        res.locals.reviewId = reviewId;
        res.locals.review = review;
        return next();
    }
    return next({
        status: 404,
        message: `A review with an ID of ${reviewId} could not be found`
    })
}

// route handlers
// list all reviews
async function list(req, res, next) {
    const { movieId } = res.locals;
    const allMovieReviews = await reviewsService.list();
    const listOfReviews = allMovieReviews.filter(movieId ? movieAndReviews => movieAndReviews.movie_id == movieId : () => true);
    res.json({ data: listOfReviews });
}

// read specific review
async function read(req, res, next) {
    const { review } = res.locals;
    res.json({ data: review })
}

module.exports = {
    list: asyncErrorBoundary(list),
    read: [
        asyncErrorBoundary(reviewExists),
        read
    ],
}