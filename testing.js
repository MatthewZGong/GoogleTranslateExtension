
$(function(){
    $('#dropDownButton').click(function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      })
    })
$(function(){
    $('#myInput').keyup(  function filterFunction() {
        var input, filter, ul, li, a, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("button");
        for (i = 0; i < a.length; i++) {
          txtValue = a[i].textContent || a[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
          } else {
            a[i].style.display = "none";
          }
        }
      })
})
$(function(){
    var div, a ,i;
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("button");
    // for(i = 0; i < a.length; i++){
    // $("#"+a[i].id).click(function(){
    //     $("#what").text("hi")
    // })
    // }
    $("#Chinese").click(function(){
        $("#what").text("Chinese")
        chrome.storage.sync.set({"Language To": "Chinese"},function(){})
    })
    $("#English").click(function(){
        $("#what").text("English")
        chrome.storage.sync.set({"Language To": "English"},function(){})
    })
    $("#French").click(function(){
        $("#what").text("French")
        chrome.storage.sync.set({"Language To": "French"},function(){})
    })
    $("#Japanese").click(function(){
        $("#what").text("Japanese")
        chrome.storage.sync.set({"Language To": "Japanese"},function(){})
    })
    $("#Russian").click(function(){
        $("#what").text("Russian")
        chrome.storage.sync.set({"Language To": "Russian"},function(){})
    })
    $("#Spanish").click(function(){
        $("#what").text("Spanish")
        chrome.storage.sync.set({"Language To": "Spanish"},function(){})
    })
})
    // <button type="button" id="Chinese">Chinese</button>
    // <button type="button" id="English">English</button>
    // <button type="button" id="French">French</button>
    // <button type="button" id="Japanese">Japanese</butoon>
    // <button type="button" id="Russian">Russian</button>
    // <button type="button" id="Spanish">Spanish</button>