// Removes the log out link from above the forums index
if (window.location.href == "http://forums.somethingawful.com/" || window.location.href == "http://forums.somethingawful.com/index.php") {
	$(".mainbodytextsmall").hide();
}

$(".forumbar").append($("#ac_timemachine"));

$("#nav_purchase").before("<div id='header'><img src='http://i.somethingawful.com/core/head-logo-bluegren.png' /></div>")