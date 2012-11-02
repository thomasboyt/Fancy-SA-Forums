chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: chrome.extension.getURL("css/219-amber.css")}
  },
  {urls: ["http://forums.somethingawful.com/css/219.css*"]},
  ["blocking"]
);