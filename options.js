 $(function(){
    chrome.storage.sync.get(["search"], function(input){
        $("#current").text(input.search)
    })
    $("#enter").click(function(){
        $("#current").text($("#default").val())
        chrome.storage.sync.set({"search": $('#default').val()},function(){})
    })
 })