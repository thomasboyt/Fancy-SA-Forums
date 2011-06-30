$(".forumbar").append($("#ac_timemachine"));

/* No banner in YOSPOS */
try {
	if ($(".breadcrumbs").html().indexOf("YOSPOS") == -1) {
		$("#container").prepend("<div id='header'><img src='http://i.somethingawful.com/core/head-logo-bluegren.png' /></div>")
	}
}
catch(e) {
	//no breadcrumbs
	$("#container").prepend("<div id='header'><img src='http://i.somethingawful.com/core/head-logo-bluegren.png' /></div>")
}

if (window.location.href.indexOf("search") != -1) {
	$("#globalmenu").after("<div id='container'>dd");
	$("#copyright").after("</div>");
}

/* Experimental: new page nav positioning */

if (window.location.href.indexOf("forumdisplay") != -1)  {
	//move top page nav down to above blue bar
	$(".pages:first").insertBefore($("#forum"));
	$(".pages:first").attr("class", "pages top");
}

if (window.location.href.indexOf("showthread.php") != -1 ) {
	//move bottom page nav up to under the post/reply buttons
	$(".pages:last").insertAfter($(".threadbar.bottom"))
}