var strings = document.getElementsByClassName('string');

$(window).scroll(function() { 

	var scrollTop = $(window).scrollTop();
	console.log('SCROLLING: ' + scrollTop);

	for (i=0; i<strings.length; ++i)
	{
		TweenLite.to(strings[i], 0, {css:{height:200
			=

			+ "px"}});
		TweenLite.to(strings[i], .4 + Math.random()*2, {css:{height:"60px"}, delay:.01, ease:Bounce.easeInOut});
	}		
	
});

