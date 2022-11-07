const router = require("express").Router();
const controller = require("./reviews.controller")
// methodNotAllowed
const methodNotAllowed = require("../errors/methodNotAllowed");
// import cors
const cors = require("cors")
// define routes to endpoints
// route to specific review
router.route("/:reviewId")
    .get(controller.read)
    .all(methodNotAllowed)
// route to list of ratings
router.route("/")
    .get(controller.list)
    .all(methodNotAllowed)

module.exports = router