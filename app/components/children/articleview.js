// Include React
var React = require("react");

// Create the Header component
// Notice how the Header uses React.createClass
// Notice how it uses a render function which specifies what will be displayed by the component
var ArticleView = React.createClass({

    // Here we describe this component's render method
    render: function() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <h2><a href="link"></a></h2>
                        <button className="btn btn-success">Save Article</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h4></h4>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = ArticleView;
