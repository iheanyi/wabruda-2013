$(document).ready(function() {
	$.stellar();

	console.log("Loading Nav.");
	$('.navbar').onePageNav();

	console.log("LOADED");

	$('li').click(function() {
		$("li.active").removeClass("active");
		$(this).addClass('active');
	});

	$('.navbar a').click(function() {
		$("li.active").removeClass("active");
	});

	console.log("Now we're just checking something else...");

	$('.nav a').on('click', function() {

		if ($('.navbar-toggle').is(":visible")) {
			$('.navbar-toggle').click();
		}
	});
});


//if ($('.navbar-toggle').is(":visible")) $('.navbar-toggle').click();
