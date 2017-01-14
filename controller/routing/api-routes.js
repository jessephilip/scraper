// import mongoose model
var Articles = require("../../models/article.js");

// import Scraper
const Scraper = require("../scraper.js");

//export api routes
module.exports = (app) => {

    // This is the route we will send GET requests to retrieve our most recent search data.
    // We will call this route the moment our page gets rendered
    app.get("/api", function(req, res) {

        // We will find all the records, sort it in descending order, then limit the records to 5
        Articles.find({}).exec(function(err, doc) {
            if (err) {
                console.log(err);
				res.send(err);
            } else {
                res.send(doc);
            }
        });
    });

    app.post("/retrieve", (req, res) => {
        console.log("Retrieving articles from Smashmagazine.");
        Scraper(function(data) {
			console.log(data);
        });
    });

    // This is the route we will send POST requests to save each search.
    app.post("/api", function(req, res) {
        console.log("BODY: " + req.body.location);

        // Here we'll save the location based on the JSON input.
        // We'll use Date.now() to always get the current date time
        Articles.create({
            location: req.body.location,
            date: Date.now()
        }, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.send("Saved Search");
            }
        });
    });
}
