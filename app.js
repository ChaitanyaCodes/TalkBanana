var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputArea = document.querySelector("#output");

// var serverUrl = "https://api.funtranslations.com/translate/yoda.json";

var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/minion.json";

function getTranslationUrl(input){
    return serverUrl + "?" + "text=" + input;
}

function errorHandler(error){
    console.log("error encountered",error);
    alert("Something went wrong with the server! Please try again later.");
}

function translateBanana(){
    var inputText = textInput.value;

    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputArea.innerText = translatedText;
    })
    .catch(errorHandler);
}

// add event listener to the translate button.
btnTranslate.addEventListener("click",translateBanana);

