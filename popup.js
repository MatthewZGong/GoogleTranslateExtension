
//         async function quickstart(
//             projectId = 'future-producer-233501' // Your GCP Project Id
//           ) {
//             // Imports the Google Cloud client library
//             const {Translate} = require('@google-cloud/translate');
          
//             // Instantiates a client
//             const translate = new Translate({projectId});
          
//             // The text to translate
//             const text = "Hello World";
          
//             // The target language
//             const target = 'ru';
          
//             // Translates some text into Russian
//             const [translation] = await translate.translate(text, target);
//             console.log(`Text: ${text}`);
//             console.log(`Translation: ${translation}`);
//             // $('#Translation').text(`Translation: ${translation}`)
            
//           }

// const args = process.argv.slice(2);
// quickstart(...args).catch(console.error);
$(function(){
    chrome.storage.sync.get(["Translation"], function(input){
        var display = "Translation: "
        if(input.Translation){
            display += input.Translation
        }
        $("#Translation").text(display)
        $('#userInput').val(input.Translation)
    })
})
$(function(){
    $('#userInput').keyup(function(){
        chrome.storage.sync.set({"Translation": $("#userInput").val()},function(){})
          $('#Translation').text("Translation: "+$("#userInput").val())
    })
});