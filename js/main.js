$(document).ready(function() {
	$.stellar();

	console.log("Loading Nav.");
	//$('#nav').onePageNav();

	console.log("LOADED");;
	$('.nav a').on('click', function(){
		if ($('.navbar-toggle').is(":visible")) {
			$('.navbar-toggle').click();
		}
	});
});


//if ($('.navbar-toggle').is(":visible")) $('.navbar-toggle').click();
