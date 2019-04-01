



(function(){
    var links = document.getElementsByClassName("wiki-link-internal");

    for(i of links){
        i.removeAttribute("href");
    }


    chrome.runtime.onMessage.addListener(
        function (req, sen, senR) {
            console.log(req.howmany);
            if (req.howmany) {
                chrome.runtime.sendMessage({linklen: links.length});
            }
        }
    )




})();

