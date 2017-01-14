// Include React
var React = require("react");

// Creating the Form component
var Header = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
		<main>
	  		<div className="title">
	  			<h1>SmashingMagazine Scraper</h1>
	  			<p className="text-center">
	  				Bringing you the latest from smashingmagazine.com
	  			</p>
	  		</div>
	  	</main>
    );
  }
});

// Export the component back for use in other files
module.exports = Header;
