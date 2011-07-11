/*

Post toolbox

*/



/*

BBCode insertion - see tag_behaviors.txt

*/

var insertBBCode = function(desc, tag) {
	$('#bbcode').append("<a id='bbcode_" + tag + "_link' class='bbcode_button' href='#'>" + desc + "</a> ");
	$("#bbcode_" + tag + "_link").click(function () {
		var selection = $("textarea").getSelection();
		
		switch(tag) {
			case "URL":
				if (selection.start == selection.end) {
					$('textarea').insertAtCaret("[url='address'][/url]");
					$('textarea').setSelectionPosition(selection.start + 6, selection.start + 13)
				}
				else {
					$('textarea').insertAtCaret("[url='address']" + selection.text + "[/url]");
					$('textarea').setSelectionPosition(selection.start + 6, selection.start + 13)
				}
				break;
			case "IMG":
				break;
			case "TIMG":
				break;
			case "video":
				break;
			case "list=1":
				break;
			case "list":
				break;
			case "quote":
				break;
			default:
				if (selection.start == selection.end) {
					$('textarea').insertAtCaret("[" + tag + "][/" + tag + "]");
					$('textarea').setCursorPosition(selection.start + 2 + tag.length);
				}
				else {
					//wrap the selection in tags
					$('textarea').insertAtCaret("[" + tag + "]" + selection.text + "[/" + tag + "]");
				}
				break;
				
		}
	});
}

/*

BBCode buttons

*/

$("textarea").before("<div id='bbcode' />");
$("#bbcode").html("<strong>BBCode quick insert:</strong> <br>");

insertBBCode("URL", "URL");
insertBBCode("Image", "IMG");
insertBBCode("Bold", "b");
insertBBCode("Fixed width", "fixed");
