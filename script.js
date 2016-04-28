
$("document").ready(function(){

	$("li").hover(function() {
		$(this).fadeTo(150, 0.25);
	},
	function(){
		$(this).fadeTo(150, 1);
	});

	$("li").click(function() {
		
		if($(this).text() === "clicked!") {
			originalText = $(this).text("Link"); // needs to be changed
			$(this).css("background-color", "rgba(0, 0, 0, 0)")
		} else {
			$(this).text("clicked!");
			$(this).css("background-color", "#8196A9");
		}

	});

});