// Include React
var React = require("react");

// Creating the Results component
var Nav = React.createClass({

    getArticles: function () {
        $.post("/retrieve", function(result) {
            console.log("Articles retrieved from Smashmagazine: ", result);
            // sweetAlert("Oops...", "Something went wrong!", "error");
        });
    },

    // Here we render the function
    render: function() {
        return (
            <nav className="nav navbar-default">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="">Get SmashMagazine Articles</span>
                    </button>
                    <a className="navbar-brand" href="#">SmashMagazine Scraper</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Saved Articles</a>
                        </li>
                        <button type="button" className="btn btn-primary navbar-btn" onClick={this.getArticles}>Get New Articles</button>
                    </ul>

                </div>
            </nav>
        );
    }
});

// Export the component back for use in other files
module.exports = Nav;
