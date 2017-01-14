// export html routes
module.exports = (app) => {

	// Main "/" Route. This will redirect the user to our rendered React application
	app.get("/", function(req, res) {
	  res.sendFile(__dirname + "/public/index.html");
	});

	// function to perform on /scrape
	app.get("/scrape", (req, res) => {
		var scraper = require ("../scraper.js");
		res.send("SmashingMagazine scraped");
	});
}
