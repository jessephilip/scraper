// Include React
var React = require("react");

// Here we include all of the sub-components
var Header = require("./children/Header.js");
var Nav = require("./children/Nav.js");
var Articles = require("./children/Articles.js");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

// Creating the Main component
var Main = React.createClass({

    // Here we set a generic state associated with the number of clicks
    // Note how we added in this history state variable
    getInitialState: function() {
        return {articles: []};
    },

    // The moment the page renders get the History
    componentDidMount: function() {
        // Get the latest history.
        helpers.getArticles().then(function(response) {
            console.log(response);
            if (response !== this.state.history) {
                console.log("Articles", response.data);
                this.setState({articles: response.data});
            }
        }.bind(this));
    },

    // Here we render the function
    render: function() {
        return (

            <div>
                <div>
                    <Nav/>
                </div>

                <div>
                    <div>
                        <Header/>
                    </div>
                    <div className="container">
                        <Articles articles={this.state.articles}/>
                    </div>
                </div>

            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;
