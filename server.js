const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const routes = require("./routes")
const episodeSeed = require("./scripts/episeedDB")
const blogSeed = require("./scripts/blogseedDB")
const path = require("path")
const app = express()
const PORT = process.env.PORT || 8889

// define middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// add routes
app.use(routes)

console.log("server log")

// connect to mongoDB
episodeSeed.connect_db();
episodeSeed.seedDB();

blogSeed.connect_db();
blogSeed.seedDB()

// start api server
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

//ps aux | grep -i node