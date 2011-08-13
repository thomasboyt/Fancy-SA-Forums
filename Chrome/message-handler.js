chrome.extension.onRequestExternal.addListener(
function(request, sender, sendResponse) {
    if (request.message=="installcheck")
        sendResponse({message:"yes"});
});
