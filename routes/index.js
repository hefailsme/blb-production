const path = require("path")
const router = require("express").Router()
const apiRoutesBlogs = require("./api/blogs")
const apiRoutesEpisodes = require("./api/episodes")

// api routes
router.use("/api", apiRoutesBlogs)
router.use("/api", apiRoutesEpisodes)

// if no API routes are hit, send the React app
router.use(function(req,res){
    res.sendFile(path.join(_dirname, "../client/build/index.html"))
})

module.exports = router