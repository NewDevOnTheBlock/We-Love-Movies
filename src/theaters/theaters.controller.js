const theatersService = require("./theaters.service");
// asyncErrorBoundary
const asyncErrorBoundary = require("../errors/asyncErrorBoundary")

// validation middleware

// validate theater existence
async function theaterExists(req, res, next) {

}

// route handlers
// list all theaters
async function list(req, res, next) {

}

// read specific theater
async function read(req, res, next) {

}

module.exports = {
    list: asyncErrorBoundary(list),
    read: [
        asyncErrorBoundary(theaterExists),
        read
    ],
}