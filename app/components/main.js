// Include React
var React = require("react");

// Here we include all of the sub-components
var ArticleView = require("./children/articleview.js");

// Helper Function
// var helpers = require("./utils/helpers");

// This is the main component
var Main = React.createClass({

    // Here we set a generic state associated with the number of clicks
    getInitialState: function() {
        return {articles: []};
    },

    //  On load display the number of articles
    componentDidMount: function() {
        console.log("COMPONENT MOUNTED");

		// perform 

    },

    // will run every time the component updates it's props or state
    componentDidUpdate: function(prevProps, prevState) {
        // If we have a new search term, run a new search
        if (prevState.searchTerm !== this.state.searchTerm) {
            console.log("UPDATED");
        }
    },

    setTerm: function(term) {
        this.setState({searchTerm: term});
    },

    // Here we describe this component's render method
    render: function() {
        return (
            <div>
                <ArticleView array={this.state.articles}/>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;
