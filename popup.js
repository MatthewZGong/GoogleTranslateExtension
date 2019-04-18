const apiKey = "";
// // Set endpoints
// const endpoints = {
//   translate: "",
//   detect: "detect",
//   languages: "languages"
// };

// // Abstract API request function
// function makeApiRequest(endpoint, data, type, authNeeded) {
//   url = "https://www.googleapis.com/language/translate/v2/" + endpoint;
//   url += "?key=" + apiKey;

//   // If not listing languages, send text to translate
//   if (endpoint !== endpoints.languages) {
//     url += "&q=" + encodeURI(data.textToTranslate);
//   }

//   // If translating, send target and source languages
//   if (endpoint === endpoints.translate) {
//     url += "&target=" + data.targetLang;
//     url += "&source=" + data.sourceLang;
//   }

//   // Return response from API
//   return $.ajax({
//     url: url,
//     type: type || "GET",
//     data: data ? JSON.stringify(data) : "",
//     dataType: "json",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json"
//     }
//   });
// }
// function translate(data) {
//     makeApiRequest(endpoints.translate, data, "GET", false).success(function(
//       resp
//     ) {
//       $("#Translation").text(resp.data.translations[0].translatedText);
//     //   $("h2.detection-heading").hide();
//     //   $("h2.translation-heading, p").show();
//     });
//   }

class translationHolder{
    constructor(text,language){
        this.text = text
        this.language = language 
    }
    getText(){
        return this.text 
    }
    getLanguage(){
        return this.language
    }
} 
var languageHashtable = {}
languageHashtable['Chinese'] = 'ZH'
languageHashtable['French'] = 'FR'
languageHashtable['English'] = 'EN'
languageHashtable['Japanese'] = 'JA'
languageHashtable['Russian'] = 'RU'
languageHashtable['Spanish'] = 'ES'
function trans(language){
    var url = "https://translation.googleapis.com/language/translate/v2?key=AIzaSyCm-fXGpNvdMP--YrP4HVW89ImOSMfNEik";
    // url += "&source=" + 'ZH';
    // chrome.storage.sync.get(["Translation","LanguageTo"], function(input){
    url += "&target=" + languageHashtable[language];
    // })
    url += "&q=" + $('#userInput').val();
    // chrome.tabs.create({ url: url })
    $.get(url, function (data, status) {
        $("#Translation").text("Translation: "+data.data.translations[0].translatedText);
    });
}
var holderList = [];
$(function(){

    chrome.storage.sync.get(["Translation","LanguageTo"], function(input){
        var display = "Translation: "
        if(input.Translation){
            display += input.Translation
        }
        $('#what').text(input.LanguageTo)
        $('#userInput').val(input.Translation)
        trans(input.LanguageTo);
        holderList.push(new translationHolder(input.Translation,input.LanguageTo))
    })
    $('#userInput').keyup(function(){
        chrome.storage.sync.get(["LanguageTo"], function(input){
            chrome.storage.sync.set({"Translation": $("#userInput").val()},function(){})
                // $('#Translation').text("Translation: "+$("#userInput").val())
                // var url = "http://anyorigin.com/go?url=" + encodeURIComponent("https://translate.google.com") + "/#en|zh-CN|hello&callback=?"
                // $.get(url, function(response) {
                //      $('#Translation').text(response);
                // });
                // quickstart($("#userInput").val());
                // idk($("#userInput").val()
                trans(input.LanguageTo)
                holderList.push(new translationHolder($("#userInput").val(),input.LanguageTo))
        })
    })
    $("#back").click(function(){
        holderList.pop()
        // $("#Translation").text("Translation: "+holderList[holderList.length-1].getText())
        $('#userInput').val(holderList[holderList.length-1].getText())
        chrome.storage.sync.set({"Translation": $("#userInput").val()},function(){})
        $("#what").text(holderList[holderList.length-1].getLanguage()   )
        chrome.storage.sync.set({"LanguageTo": holderList[holderList.length-1].getLanguage()},function(){})
        trans(holderList[holderList.length-1].getLanguage());
    })
    $('#dropDownButton').click(function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      })
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
          chrome.storage.sync.set({"LanguageTo": "Chinese"},function(){})
          trans("Chinese")
      })
      $("#English").click(function(){
          $("#what").text("English")
          chrome.storage.sync.set({"LanguageTo": "English"},function(){})
          trans("English")
      })
      $("#French").click(function(){
          $("#what").text("French")
          chrome.storage.sync.set({"LanguageTo": "French"},function(){})
          trans("French")
      })
      $("#Japanese").click(function(){
          $("#what").text("Japanese")
          chrome.storage.sync.set({"LanguageTo": "Japanese"},function(){})
          trans("Japanese")
      })
      $("#Russian").click(function(){
          $("#what").text("Russian")
          chrome.storage.sync.set({"LanguageTo": "Russian"},function(){})
          trans("Russian")
      })
      $("#Spanish").click(function(){
          $("#what").text("Spanish")
          chrome.storage.sync.set({"LanguageTo": "Spanish"},function(){})
          trans("Spanish")
      })
      $("#search").click(function(){
        if($("#Translation").text() != "Translation: "){
            chrome.storage.sync.get(["search"], function(input){
                var newURL = "https://www.google.com/search?q=";
                var h = " "+input.search +" "
                newURL += $("#Translation").text().substring(12)
                newURL += h
                  chrome.tabs.create({ url: newURL })
            })
        // $("#userInput").val()
        }
      })
})


// $(function(){
//     $('#dropDownButton').click(function myFunction() {
//         document.getElementById("myDropdown").classList.toggle("show");
//       })
//     })
// $(function(){
//     $('#myInput').keyup(  function filterFunction() {
//         var input, filter, ul, li, a, i;
//         input = document.getElementById("myInput");
//         filter = input.value.toUpperCase();
//         div = document.getElementById("myDropdown");
//         a = div.getElementsByTagName("button");
//         for (i = 0; i < a.length; i++) {
//           txtValue = a[i].textContent || a[i].innerText;
//           if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             a[i].style.display = "";
//           } else {
//             a[i].style.display = "none";
//           }
//         }
//       })
// })
// $(function(){
//     var div, a ,i;
//     div = document.getElementById("myDropdown");
//     a = div.getElementsByTagName("button");
//     // for(i = 0; i < a.length; i++){
//     // $("#"+a[i].id).click(function(){
//     //     $("#what").text("hi")
//     // })
//     // }
//     $("#Chinese").click(function(){
//         $("#what").text("Chinese")
//         chrome.storage.sync.set({"LanguageTo": "Chinese"},function(){})
//     })
//     $("#English").click(function(){
//         $("#what").text("English")
//         chrome.storage.sync.set({"LanguageTo": "English"},function(){})
//     })
//     $("#French").click(function(){
//         $("#what").text("French")
//         chrome.storage.sync.set({"LanguageTo": "French"},function(){})
//     })
//     $("#Japanese").click(function(){
//         $("#what").text("Japanese")
//         chrome.storage.sync.set({"LanguageTo": "Japanese"},function(){})
//     })
//     $("#Russian").click(function(){
//         $("#what").text("Russian")
//         chrome.storage.sync.set({"LanguageTo": "Russian"},function(){})
//     })
//     $("#Spanish").click(function(){
//         $("#what").text("Spanish")
//         chrome.storage.sync.set({"LanguageTo": "Spanish"},function(){})
//     })
// })
//     // <button type="button" id="Chinese">Chinese</button>
//     // <button type="button" id="English">English</button>
//     // <button type="button" id="French">French</button>
//     // <button type="button" id="Japanese">Japanese</butoon>
//     // <button type="button" id="Russian">Russian</button>
//     // <button type="button" id="Spanish">Spanish</button>