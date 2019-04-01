
function howmany(){
    console.log("get howmany");

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {howmany: true});
    });
    chrome.runtime.sendMessage({howmany: true});
};

window.onload = function() {

    document.getElementById("btn").addEventListener("click", howmany);


    chrome.runtime.onMessage.addListener(
        function (req, sen, senR) {
            console.log(req.linklen);
            if (req.linklen) {
                console.log(req.linklen);
                document.getElementById("len").innerText = req.linklen + " links deleted";
            }
        }
    )



};