

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        console.log(request.linklen);
        if (request.linklen){
            chrome.runtime.sendMessage({linklen: request.linklen});
        }
    });