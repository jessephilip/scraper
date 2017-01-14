// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Create Instance of Express
var app = express();

// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// serve static files
app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration
mongoose.connect("mongodb://localhost/smashmagazine");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Routes
require ("./controller/routing/html-routes.js")(app);
require ("./controller/routing/api-routes.js")(app);

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("Smashmagazine Scraper listening on PORT: " + PORT);
});
