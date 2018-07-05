const router = require("express").Router()
const blogsController = require("../../../controllers/blogsController")

//  matches with "api/blogs"
router.route("/")
.get(blogsController.findAll)
.post(blogsController.create)

// matches with "/API/blogs/:id"
router
    .route("/:id")
    .get(blogsController.findById)
    .put(blogsController.update)
    .delete(blogsController.remove)

module.exports = router