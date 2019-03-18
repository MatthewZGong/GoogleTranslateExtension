var contextMenuItem = {
    "id" : "replace",
    "title" : "replace",
    "contexts" : ["selection"]
}
var contextMenuItem2 = {
    "id" : "add",
    "title" : "add",
    "contexts" : ["selection"]
}
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create(contextMenuItem);
});
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create(contextMenuItem2);
});
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "replace" && clickData.selectionText){
            chrome.storage.sync.set({"Translation" :  clickData.selectionText})
    }
    if(clickData.menuItemId == "add" && clickData.selectionText){
        chrome.storage.sync.get(["Translation"], function(input){
            var display = ""
            if(input.Translation){
                display += input.Translation
            }
            display += clickData.selectionText
            chrome.storage.sync.set({"Translation" :  display})
        })
}
})

// export GOOGLE_APPLICATION_CREDENTIALS="/Users/matthewgong/Downloads/My First Project-7003da46859c.json"
