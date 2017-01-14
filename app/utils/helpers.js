// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helper = {

  // This function hits our own server to retrieve the record of query results
  getArticles: function() {
    return axios.get("/articles");
  },

  // This function posts new searches to our database.
  saveArticle: function(article) {
    return axios.post("/save", { location: location });
  }
};

// We export the API helper
module.exports = helper;
