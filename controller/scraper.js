// import cheerio for scraping
const cheerio = require("cheerio");

// import request for HTML request
const request = require("request");

const article = require("../models/article.js");

// request http://www.smashingmagazine.com/
const scrape = function(callback) {

    request("https://www.smashingmagazine.com/", (err, res, html) => {

        // Load the HTML into cheerio
        let $ = cheerio.load(html);

        // empty array for saving scraped info
        let result = [];

        // loop through the scraped information, looking for <article> elements with child <h> elements
        $("article").each((index, element) => {
            //console.log("savedScrape", element);

            // save the title of the article. the article is the textnode on the <h> elements
            let title = $(element).find("a").text();
            let link = $(element).find("a").attr("href");
            console.log(index, title, link);

            // create article object to save
            let entry = {
                title: title,
                url: link
            };

            // save scrapes to the database
            // first create a new article to save
            let Article = new article(entry);

            // save to database using model
            Article.save((err, saved) => {

                // handle error
                if (err) {
                    console.log(err);
                } else {
                    callback(saved);
                }
            });
        });
    });
}

// export scrape
module.exports = scrape;
