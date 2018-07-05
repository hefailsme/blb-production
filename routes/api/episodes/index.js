const router = require("express").Router()
const episodesRoutes = require("./episodes")

// episodes routes
router.use("/episodes", episodesRoutes)

module.exports = router