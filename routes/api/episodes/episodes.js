
const router = require("express").Router()
const episodesController = require("../../../controllers/episodesController")

//  matches with "api/episodes"
router.route("/")
.get(episodesController.findAll)
.post(episodesController.create)

// matches with "/API/episodes/:id"
router
    .route("/:id")
    .get(episodesController.findById)
    .put(episodesController.update)
    .delete(episodesController.remove)

module.exports = router