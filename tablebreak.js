/* stop breaking the fucking tables yall */

// thanks to Paolo Bergantino
// http://stackoverflow.com/questions/965816/what-jquery-selector-excludes-items-with-a-parent-that-matches-a-given-selector/965962#965962

jQuery.expr[':'].parents = function(a,i,m){
    return jQuery(a).parents(m[3]).length < 1;
};

$(".postbody img.img").bind("load", function(e) {
	
	console.log("image loaded")
	console.log("image: " + $(this).attr("src") + " has width " + $(this).width());
	
	// todo: replace 700 pixels with the content div's width (so it is the max possible size)
	
	if ($(this).width() > 700) {
		$(this).maxSize({
			width: 700
		});
	
		$(this).filter(":parents(a)").wrap("<a href='" + $(this).attr("src") + "' />");
		
		console.log("resized " + $(this).attr("src"));
	}
});