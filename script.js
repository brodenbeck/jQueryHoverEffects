
$("document").ready(function(){
	var originalText;
	
	$("li").hover(function() {
		$(this).fadeTo(150, 0.25);
	},
	function(){
		$(this).fadeTo(150, 1);
	});

	$("li").click(function() {

		if($(this).text() === "clicked!") {
			$(this).text(originalText); // needs to be changed
			$(this).css("background-color", "rgba(0, 0, 0, 0)")
		} else {
			originalText = $(this).text();
			$(this).text("clicked!");
			$(this).css("background-color", "#8196A9");
		}

	});

});