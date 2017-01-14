// import mongoose model
var articles = require("../../model/article.js");

//export api routes
module.exports = (app) => {

    // function to all articles
    app.get("/articles", function(req, res) {
        console.log(`/articles reached ${req}`);

        // get all articles in database and sort by most recent
        articles.find({}, function(err, allArticles) {

            // handle error
            if (err)
                console.log(`/articles.find ${err}`);
            else {
                console.log(`get /articles database returned: ${allArticles}`);
                res.json(allArticles);
            }
        });
    });

	app.post("/save", function(req, res) {
		console.log(`/articles reached ${req}`);

		// // save scrapes to the database
		// // first create a new article to save
		// let Article = new article(entry);
		//
		// // save to database using model
		// Article.save( (err, saved) => {
		//
		// 	// handle error
		// 	if (err) console.log("Save Error", err);
		// 	else console.log("Save Success", saved);
		// });
	});
}
