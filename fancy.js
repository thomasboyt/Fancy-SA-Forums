$(".forumbar").append($("#ac_timemachine"));

$("#container").prepend("<div id='header'><img src='http://i.somethingawful.com/core/head-logo-bluegren.png' /></div>")

if (window.location.href.indexOf("search") != -1) {
	$("#globalmenu").after("<div id='container'>dd");
	$("#copyright").after("</div>");
}