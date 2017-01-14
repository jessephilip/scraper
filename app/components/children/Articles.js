// Include React
var React = require("react");

// This is the History component. It will be used to show a log of  recent searches.
var Articles = React.createClass({
    // Here we describe this component's render method
    render: function() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Smashmagazine Articles</h3>
                </div>

                {/* Here we use a map function to loop through an array in JSX */}
                {this.props.articles.map(function(prop, i) {
                    return (
                        <div className="row" key={i}>
                            <div className="col-md-1">
                                <button data-id={prop._id} className="btn btn-primary btn-sm"><i className="glyphicon glyphicon-comment"></i></button>
                            </div>
                            <div className="col-md-11">
                                <a target="_blank" className="list-group-item" href={prop.url}>{prop.title}</a>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Articles;
