const router = require("express").Router();
const methodNotAllowed = require("../errors/methodNotAllowed");
// methodNotAllowed
const controller = require("./theaters.controller")
// import cors
const cors = require("cors")
// define routes to endpoints
// route to specific theater
router.route("/:theaterId")
    .get()
    .all(methodNotAllowed)
// route to list of all theaters
router.route("/")
    .get()
    .all(methodNotAllowed)

module.exports = router