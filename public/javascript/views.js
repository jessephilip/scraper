function getArticles() {
	$.get("/articles", function(result) {
		console.log(result);
		// sweetAlert("Oops...", "Something went wrong!", "error");
	});
}
