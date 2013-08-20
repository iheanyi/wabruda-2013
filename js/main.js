$.stellar();

$('.top-slide').blurjs({
    source: 'body',     //Background to blur
    radius: 5,          //Blur Radius
    overlay: 'rgba(120,255,255,0.4)'
        //Overlay Color, follow CSS3's rgba() syntax
});

$('.nav a').on('click', function(){
	if ($('.navbar-toggle').is(":visible")) {
		$('.navbar-toggle').click();
	}
});

//if ($('.navbar-toggle').is(":visible")) $('.navbar-toggle').click();
