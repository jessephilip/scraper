// Include React
const React = require("react");

// Create the Header component
// Notice how the Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
const ArticleView = React.createClass({
    // Here we set a generic state associated with the number of clicks
    getInitialState: () => {
        return {article: "adsfafadfadfadfafadfadfasfasdfafdafda", link: "bbbbbbbbbbbbbbbbbbbbbb"};
    },

    //  On load display the number of articles
    componentDidMount: function() {
        console.log("COMPONENT MOUNTED");

    },

    // will run every time the component updates it's props or state
    componentDidUpdate: function(prevProps, prevState) {
        // If we have a new search term, run a new search
        if (prevState.searchTerm !== this.state.searchTerm) {
            console.log("UPDATED");
        }
    },

	saveArticle: function () {
		console.log("saved");
	},

    setTerm: function(term) {
        this.setState({searchTerm: term});
    },

    // Here we describe this component's render method
    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h2>{this.state.article}</h2>
                        <button className="btn btn-success" onClick={this.saveArticle}>Save Article</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4>{this.state.link}</h4>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = ArticleView;
