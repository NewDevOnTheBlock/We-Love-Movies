const router = require("express").Router();
const controller = require("./movies.controller")
const cors = require("cors")
// define routes to endpoints

router.route("/:movieId")

router.route("/")
    .get(controller.list())

module.exports = router