async function quickstart(input,
    projectId = 'future-producer-233501' // Your GCP Project Id
) {
    // Imports the Google Cloud client library
    const {Translate} = require('@google-cloud/translate');
  
    // Instantiates a client
    const translate = new Translate({projectId});
  
    // The text to translate
    const text = input;
  
    // The target language
    const target = 'zh-CN';
  
    // Translates some text into Russian
    const [translation] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    const trans = `Translation: ${translation}`;
    console.log(trans)
    return trans
  }
  console.log(quickstart("hello"));
  console.log("what am i doing")