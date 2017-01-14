// import and set up express
const express = require ("express");
const app = express();

// import and set up morgan
const logger = require ("morgan");
app.use(logger("dev"));

// import body-parser
const bodyParser = require ("body-parser");
app.use(bodyParser.urlencoded({
    extended: false
}));

// offer up static files
app.use(express.static("./public"));

// import and set up mongoose
const mongoose = require ("mongoose");

// Database configuration with mongoose
mongoose.connect("mongodb://heroku_m21v0lfj:dlfm99aqn2s8utm9clhdjc989h@ds055584.mlab.com:55584/heroku_m21v0lfj");
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", (error) => {
    console.log("Mongoose Error: ", error);
});

// Log into the db through mongoose, log a success message
db.once("open", () => {
    console.log("Mongoose connection successful.");
});

// import routes
require ("./controller/routing/api-routes.js")(app);
require ("./controller/routing/html-routes.js")(app);

// set up constiable for server port
const PORT = process.env.PORT || 3000;

// run server
app.listen(PORT, () => {
	console.log("Scraper up and listening on " + PORT);
});
