$(document).ready(function() {
	$.stellar();

	var scrollTimeout = null;
	onScroll();
	onScrollEnd();

	var panels = $('.slide');
	var links =  $('.nav li');

	var secondLink = $(links[1]).children("a:first").attr('href');
	console.log(panels.length);
	console.log($(links[1]).children("a:first").attr('href'));

	console.log($(secondLink).scrollTop());
	var firstTop = $(panels[0]).offset().top;
	var secondTop = $(panels[1]).offset().top;

	console.log(firstTop);
	console.log(secondTop);

	$(window).on("scroll", onScroll);

	function onScroll() {
	    if (scrollTimeout) {
	        clearTimeout(scrollTimeout);
	    }
	    scrollTimeout = setTimeout(onScrollEnd, 500);
	}

	function onScrollEnd() {
	    // Scrolling has stopped
	    // Do stuff ...

	   scrollTimeout = null;
	}


	console.log("Loading Nav.");
	console.log(window.location.hash);
	$('.navbar').onePageNav();

	console.log("LOADED");

	$('li').click(function() {
		$("li.active").removeClass("active");
		$(this).addClass('active');
		var href = $(this).children("a:first").attr('href');
		console.log(href);

	});

	var viewportHeight = $(window).height();
	var viewportWidth = $(window).width();

	function findViewportDimen() {
		viewportHeight = $(window).height();
		viewportWidth = $(window).width();
	}

	function checkLocation() {
		currentLocation = $(window).scrollTop();

		console.log(currentLocation);

		if(currentLocation < viewportHeight) {
			console.log("Adding class.");
			navbar.addClass('hidden');

		} else {

			console.log("Removing class.");
			navbar.removeClass('hidden');
		}

		console.log($(window).scrollTop());
		/*if(window.location.hash == "#home") {
			console.log("Adding class.");
			//navbar.addClass('hidden');
		} else {
			console.log("Removing class.");
			navbar.removeClass('hidden');
		}*/

	}
	var panelTops = [];

	$(window).on("resize", findViewportDimen);
    var navbar = $('.navbar');

	checkViewport();

	function checkViewport() {
		if(viewportWidth < 768) {
			navbar.removeClass('hidden');
		} else {
			navbar.addClass('hidden');
		}
	}


	var links =  $('.nav li');
	var panelIndex;

	$(window).scroll(function () {
		checkLocation();
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
