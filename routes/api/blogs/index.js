const router = require("express").Router()
const blogsRoutes = require("./blogs")

// episodes routes
router.use("/blogs", blogsRoutes)

module.exports = router