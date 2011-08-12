css = $("link[rel=stylesheet][href^='/css/219.css']");
if (css.size() > 0) {
    // Replace broken 219.css with updated version
    $(css).attr("href", chrome.extension.getURL("/css/219.css"));
}

if (css.size() == 0) {
css = $("link[rel=stylesheet][href^='/css/fyad.css']");
if (css.size() > 0) {
    $(css).append("<link rel='stylesheet' type='text/css' href='"+chrome.extension.getURL("/css/fyad.css")+"' />");
}
}

if (css.size() == 0) {
    $("head").append("<link rel='stylesheet' type='text/css' href='"+chrome.extension.getURL("/css/default.css")+"' />");
}

// Wraps the search in a container for proper styling
if (window.location.pathname.indexOf("search") != -1) {
	$("#globalmenu, #nav_purchase, #navigation, .breadcrumbs, #content, #copyright").wrapAll("<div id='container'></div>");
}

// Add frontpage style banner
$("#container").prepend("<div id='header'><img id='logo_img_bluegren' src='http://i.somethingawful.com/core/head-logo-bluegren.png' /></div>")

// Moves the archives box
if ($(".forumbar").size() == 0)
    $("table#subforums").after("<div class='forumbar'></div>");
$(".forumbar").append($("#ac_timemachine"));

// Properly styles the bottom breadcrumbs tag
$(".mainbodytextlarge:last, .online_users:last").wrapAll($("<div class ='breadcrumbs' />"));

// Add banner
$("#globalmenu").insertBefore($("#container :first"));

// Fix forum navbar
$("ul#navigation").after("<div id='navbar_wrap'></div>");
$("div#navbar_wrap").append($("ul#navigation"));
$("ul#navigation li").each(function(i, el) {
    link = $(this).find("a");
    if ($(link).attr('href').substr(1, 25) == 'account.php?action=logout')
        $(link).attr('id', 'logout');
    else if ($(link).attr('href').substr(1, 24) == 'account.php?action=login') {
        $(link).attr('id', 'logout');
        $(link).html('Log In');
    }
    $(this).empty().append(link);
});

// Move the post author content
$("table#forum.threadlist tbody tr").each(function(i, el) {
	
	author = $(this).find("td.author");
	$(author).find("a").attr("class", "author");
	
	replies = $(this).find("td.replies");
	$(replies).find("a").attr("class", "replies");
	
	if ($(this).find(".title_pages")[0] == null) {
		$(this).find("td.title").append("<div class='title_pages'>");
	}
	else {
		$(this).find(".title_pages").prepend("<br />");
	}
	$(this).find(".title_pages").prepend("by " + author.html());
	$(this).find(".author:first").after(" - " + replies.html() + " replies");

    // Merge columns into posticon field
    posticon = $(this).find("td.icon img");

    // bookmark star
    star = $(this).find("td.star img");
    star_src = $(star).attr('src');
    if (star_src == "http://fi.somethingawful.com/style/bookmarks/star-off.gif")
        $(star).attr('src', chrome.extension.getURL("/images/star-off.gif"));
    else if (star_src == "http://fi.somethingawful.com/style/bookmarks/star0.gif")
        $(star).attr('src', chrome.extension.getURL("/images/star0.gif"));
    else if (star_src == "http://fi.somethingawful.com/style/bookmarks/star1.gif")
        $(star).attr('src', chrome.extension.getURL("/images/star1.gif"));
    else if (star_src == "http://fi.somethingawful.com/style/bookmarks/star2.gif")
        $(star).attr('src', chrome.extension.getURL("/images/star2.gif"));

    star.css("margin-top", "5px");
    star.css("margin-left", "45px");
    posticon.after(star);
    posticon.after("<br />");
    $(this).find("td.star").remove();

    // Ask/tell and SA-Mart icons
    icon2 = $(this).find("td.icon2 img");
    if (icon2.size() > 0) {
        
        icon2_src = $(icon2).attr('src');
        if (icon2_src == 'http://fi.somethingawful.com/ama.gif')
            $(icon2).attr('src', chrome.extension.getURL("/images/asktell-ask.gif"));
        else if (icon2_src == 'http://fi.somethingawful.com/tma.gif')
            $(icon2).attr('src', chrome.extension.getURL("/images/asktell-tell.gif"));
        else if (icon2_src == 'http://fi.somethingawful.com/forums/posticons/icon-37-selling.gif')
            $(icon2).attr('src', chrome.extension.getURL("/images/samart-sell.gif"));
        else if (icon2_src == 'http://fi.somethingawful.com/forums/posticons/icon-38-buying.gif')
            $(icon2).attr('src', chrome.extension.getURL("/images/samart-buy.gif"));
        else if (icon2_src == 'http://fi.somethingawful.com/forums/posticons/icon-46-trading.gif')
            $(icon2).attr('src', chrome.extension.getURL("/images/samart-swap.gif"));
        else if (icon2_src == 'http://fi.somethingawful.com/forums/posticons/icon-52-trading.gif')
            $(icon2).attr('src', chrome.extension.getURL("/images/samart-bid.gif"));

        posticon.after(icon2);
        $(this).find("td.icon2").remove();
        $(this).find("td.icon").css("width", "100px");
        $(icon2).css("margin-left", "1px");
    }
});

// Remove headers from merged columns
$("table#forum.threadlist thead tr th.star").remove();
$("table#forum.threadlist thead tr th.icon2").remove();
$("table#forum.threadlist thead tr th.icon").css("width", "100px");

/* 

New page nav

*/

// --- forumdisplay.php ---

if (window.location.pathname == "/forumdisplay.php") {
    // top
    $("#forum").before("<div class = 'forumbar top' />");
    $(".forumbar.top").append("<div class = 'forumbar_pages' />");
    $(".forumbar_pages").append($("#mp_bar .pages"));

    // bottom
    $(".forumbar:last").append("<div class = 'forumbar_pages' />");
    $(".forumbar_pages:last").append($('.pages.bottom'));

    // post button
    $(".forumbar.top").append($(".postbuttons"))
}


// --- showthread.php ---

if (window.location.pathname == "/showthread.php") {
    // top
    $(".threadbar.top").append("<div class = 'threadbar_pages' />");
    $(".threadbar_pages").append($(".pages.top"));

    // bottom
    $(".threadbar.bottom .clear").before("<div class = 'threadbar_pages' />");
    $(".threadbar_pages:last").append($(".pages.bottom"));

    // Hide the new thread button from instead a thread
    $("ul.postbuttons li a[href^='newthread.php']").parent().css("display","none");
}


/*$(".threadbar .threadrate").before($(".threadbar.bottom .postbuttons"))

$(".threadrate b").html("Rate: ");*/


/* Webkit timg fixes */
function toggleTimg(e) {
    var old_width = $(this).attr('old_width');

    if ( old_width !== undefined ) {
        $(this).attr('width', old_width);
        $(this).removeAttr('old_width');
    } else {
        $(this).attr('old_width', $(this).attr('width'));
        $(this).removeAttr('width');
    }
}

$(".timg").css("border", "2px solid #2D9F09");

$(".timg").each(function(i) {
    if ($(this).parent('a').length > 0) {
        if ($(this).parent('a').attr('href') == $(this).attr('src')) {
            $(this).unwrap();
            $(this).click(toggleTimg);
        }
    }
    else {
        console.log("timg'd");
        $(this).click(toggleTimg);
    }

});

// --- bookmarkthreads.php and usercp.php ---


if (window.location.pathname == "/usercp.php" || window.location.pathname == "/bookmarkthreads.php") {
    // top
    $("#forum").before("<div class = 'forumbar top' />");
    $(".forumbar.top").append("<div class = 'forumbar_pages' />");
    $(".forumbar_pages").append($("#mp_bar .pages"));

    // bottom
    $(".forumbar:last").append("<div class = 'forumbar_pages' />");
    $(".forumbar_pages:last").append($('.pages.bottom'));

    // post button
    $(".forumbar.top").append($(".postbuttons"))

    $("div.forumbar.top div.forumbar_pages").before($("span#bookmark_edit_attach"));
    $("div.pages:first").appendTo($("div.forumbar.top div.forumbar_pages"));
    if ($("div.pages").size() > 1)
        $("div.pages:last").appendTo($("div.forumbar div.forumbar_pages div.pages.bottom"));

    $("ul#usercpnav  li a[href$='bookmarkthreads.php']").html("Bookmarks");
    $("ul#usercpnav  li a[href$='action=editprofile']").html("Profile");
    $("ul#usercpnav  li a[href$='action=editoptions']").html("Options");
    $("ul#usercpnav  li a[href$='userlist=buddy']").html("Buddy List");
    $("ul#usercpnav  li a[href$='userlist=ignore']").html("Ignore List");

    // hide the bookmark explanation text
    $("form[name=bookmarks] div:first").css("display", "none");
}


// --- Reply Page ---
$("form[action=newreply.php] div#thread").css({'overflow':'scroll','height':'500px'});
$("form[action=newreply.php] div#thread table.post").each(function(i, el) {
    $(this).find("tr:eq(1)").css("display", "none");
    $(this).find("dd.title").css("display", "none");
    $(this).find("dd.registered").css("display", "none");
});
