const reviewsService = require("./reviews.service");
// asyncErrorBoundary
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

// validation middleware

// validate review existence
async function reviewExists(req, res, next) {

}

// route handlers
// list all reviews
async function list(req, res, next) {

}

// read specific review
async function read(req, res, next) {

}

module.exports = {
    list: asyncErrorBoundary(list),
    read: [
        asyncErrorBoundary(reviewExists),
        read
    ]
}