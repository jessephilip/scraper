function getArticles() {
	$.post("/retrieve", function(result) {
		console.log("Articles retrieved from Smashmagazine: ", result);
		// sweetAlert("Oops...", "Something went wrong!", "error");
	});
}
