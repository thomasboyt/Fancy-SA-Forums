/* stop breaking the fucking tables yall */

// thanks to Paolo Bergantino & Andrew Ramdsen
// http://stackoverflow.com/questions/965816/what-jquery-selector-excludes-items-with-a-parent-that-matches-a-given-selector/965962#965962
// http://irama.org/news/2011/06/05/cached-images-have-no-width-or-height-in-webkit-e-g-chrome-or-safari/

jQuery.expr[':'].parents = function(a,i,m){
    return jQuery(a).parents(m[3]).length < 1;
};

$(".postbody img.img").load(function() {
	var img = this;
	
	//webkit cache'd image width hack
	setTimeout(function() {
		var src = $(this).attr('src');
	
		console.log("image: " + $(img).attr("src") + " has width " + $(img).width());

		// todo: replace 700 pixels with the content div's width (so it is the max possible size)

		if ($(img).width() > 700) {
			$(img).maxSize({
				width: 700
			});

			$(img).filter(":parents(a)").wrap("<a href='" + $(img).attr("src") + "' />");
	
			console.log("resized " + $(img).attr("src"));
		}
	}, 0);
});