// import mongoose model
var Articles = require("../../model/article.js");

//export api routes
module.exports = (app) => {

    app.get("/articles", function(req, res) {

        // We will find all the records, sort it in descending order, then limit the records to 5
        Articles.find({}).exec(function(err, doc) {
            if (err) {
                console.log(err);
            } else {
                res.send(doc);
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
