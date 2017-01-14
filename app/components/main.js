// Include React
const React = require("react");

// Helper Function
const helpers = require("../utils/helpers");

// Here we include all of the sub-components
const ArticleView = require("./children/articleview.js");

// This is the main component
const Main = React.createClass({

    // Here we set a generic state associated with the number of clicks
    getInitialState: function() {
        return {articles: []};
    },

    componentWillMount: function() {

    },

    //  On load display the number of articles
    componentDidMount: function() {
        console.log("Main MOUNTED");

		helpers.getArticles().then(function(articles) {
			console.log("initial state", articles);
			this.setState({articles: articles});
		}.bind(this));

    },

    // will run every time the component updates it's props or state
    componentDidUpdate: function(prevProps, prevState) {
        // If we have a new search term, run a new search
        if (prevState.articles !== this.state.articles) {
            console.log("UPDATED");
        }
    },

    // Here we describe this component's render method
    render: function() {
        return (
            <div>
                <ArticleView array={this.state.array}/>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;
