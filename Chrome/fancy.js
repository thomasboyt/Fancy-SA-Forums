// Replace broken 219.css with updated version
$("link[rel=stylesheet][href^='/css/219.css']").attr("href", chrome.extension.getURL("/")+"219.css");

// Wraps the search in a container for proper styling
if (window.location.href.indexOf("search") != -1) {
	$("#globalmenu, #nav_purchase, #navigation, .breadcrumbs, #content, #copyright").wrapAll("<div id='container'></div>");
}

// No banner in YOSPOS
try {
	if ($(".breadcrumbs").html().indexOf("YOSPOS") == -1) {
		$("#container").prepend("<div id='header'><img id='logo_img_blugren' src='http://i.somethingawful.com/core/head-logo-bluegren.png' /></div>")
	}
}
catch(e) {
	//no breadcrumbs
	$("#container").prepend("<div id='header'><img id='logo_img_bluegren' src='http://i.somethingawful.com/core/head-logo-bluegren.png' /></div>")
}

// Moves the archives box
$(".forumbar").append($("#ac_timemachine"));

// Properly styles the bottom breadcrumbs tag
$(".mainbodytextlarge:last, .online_users:last").wrapAll($("<div class ='breadcrumbs' />"));

// Add banner
$("#globalmenu").insertBefore($("#container :first"));

// Move the post author content
$("table#forum.threadlist tbody tr").each(function(i, el) {
	
	author = $(this).find("td.author");
	$(author).find("a").attr("class", "pagenumber");
	
	replies = $(this).find("td.replies");
	$(replies).find("a").attr("class", "pagenumber");
	
	if ($(this).find(".title_pages")[0] == null) {
		$(this).find("td.title").append("<div class='title_pages'>");
	}
	else {
		$(this).find(".title_pages").prepend("<br />");
	}
	$(this).find(".title_pages").prepend("by " + author.html());
	$(this).find(".pagenumber:first").after(" - " + replies.html() + " replies");

    posticon = $(this).find("td.icon img");
    star = $(this).find("td.star img");
    star.css("margin-top", "3px");
    posticon.after(star);
    posticon.after("<br />");

    $(this).find("td.star").remove();
});

$("table#forum.threadlist thead tr th.star").remove();

/* 

New page nav

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


/*$(".threadbar .threadrate").before($(".threadbar.bottom .postbuttons"))

$(".threadrate b").html("Rate: ");*/
