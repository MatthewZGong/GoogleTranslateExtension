var contextMenuItem = {
    "id" : "selectionText",
    "title" : "selectionText",
    "contexts" : ["selection"]
}
chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create(contextMenuItem);
});
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == "selectionText" && clickData.selectionText){
            chrome.storage.sync.set({"Translation" :  clickData.selectionText})
    }
})