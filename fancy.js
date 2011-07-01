$(".forumbar").append($("#ac_timemachine"));

/* No banner in YOSPOS */
try {
	if ($(".breadcrumbs").html().indexOf("YOSPOS") == -1) {
		$("#container").prepend("<div id='header'><img id='logo_img_blugren' src='http://i.somethingawful.com/core/head-logo-bluegren.png' /></div>")
	}
}
catch(e) {
	//no breadcrumbs
	$("#container").prepend("<div id='header'><img id='logo_img_bluegren' src='http://i.somethingawful.com/core/head-logo-bluegren.png' /></div>")
}

if (window.location.href.indexOf("search") != -1) {
	$("#globalmenu").after("<div id='container'>dd");
	$("#copyright").after("</div>");
}

$(".mainbodytextlarge:last, .online_users:last").wrapAll($("<div class ='breadcrumbs' />"));

$("#globalmenu").insertBefore($("#header"));

/* 

new page nav 

*/

// --- forumdisplay.php ---

// top
$("#forum").before("<div class = 'forumbar top' />");
$(".forumbar.top").append("<div class = 'forumbar_pages' />");
$(".forumbar_pages").append($("#mp_bar .pages"));

// bottom
$(".forumbar:last").append("<div class = 'forumbar_pages' />");
$(".forumbar_pages:last").append($('.pages.bottom'));

// post button
$(".forumbar.top").append($(".postbuttons"))


// --- showthread.php ---

// top
$(".threadbar.top").append("<div class = 'threadbar_pages' />");
$(".threadbar_pages").append($(".pages.top"));

// bottom
$(".threadbar.bottom .clear").before("<div class = 'threadbar_pages' />");
$(".threadbar_pages:last").append($(".pages.bottom"));

$(".threadbar .threadrate").before($(".threadbar.bottom .postbuttons"))

$(".threadrate b").html("Rate: ");