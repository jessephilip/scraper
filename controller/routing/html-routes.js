// export html routes
module.exports = (app) => {

	// function to perform on home page hit
	app.get("/", (req, res) => {
		res.sendFile("index.html");
	});

	// function to perform on /scrape
	app.get("/scrape", (req, res) => {
		var scraper = require ("../scraper.js");
		res.send("SmashingMagazine scraped");
	});
}
