/* stop breaking the fucking tables with your stupid images yall */

// thanks to Paolo Bergantino, Nick Craver & Andrew Ramdsen
// http://stackoverflow.com/questions/965816/what-jquery-selector-excludes-items-with-a-parent-that-matches-a-given-selector/965962#965962
// http://stackoverflow.com/questions/3877027/jquery-callback-on-image-load-even-when-the-image-is-cached
// http://irama.org/news/2011/06/05/cached-images-have-no-width-or-height-in-webkit-e-g-chrome-or-safari/

jQuery.expr[':'].parents = function(a,i,m){
    return jQuery(a).parents(m[3]).length < 1;
};

$(".postbody img.img, .attachment img").one('load', function() {
	var img = this;
	
	setTimeout(function() {
		width = $(img).width();
		height = $(img).height();

		if (width > 700) {
			if ($(img).parents(".bbc-block")[0] != null) {
				console.log('computing new desired width')
				desiredWidth = $(img).parents(".bbc-block:first").width();
				console.log("desiredWidth: " + desiredWidth)
			}
			else {
				desiredWidth = $(img).parents(".postbody").width();
			}
			
			$(img).maxSize({
				width: desiredWidth
			});

			$(img).filter(":parents(a)")
				.after("<div style='font-size:10px; font-style:italic'>" + width + "x" + height + " image automatically resized - click for big</div>")
				.wrap("<a href='" + $(img).attr("src") + "' target='_blank' />")
				.css("border", "3px yellow solid")
				
		}
	}, 0);
}).each(function() {
		if(this.complete) $(this).load();
});