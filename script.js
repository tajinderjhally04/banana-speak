// console.log("hello");
var translateButton = document.querySelector('#translate-btn');
var textInput = document.querySelector('#text-area');
var outputArea = document.querySelector('.output');

var apiUrl = "https://api.funtranslations.com/translate/minion.json";


function getTranslation(input) {
    return apiUrl + "?" +"text=" + input;
}

function errorHandler(error) {
    console.log("error", error);
    alert('Something went wrong with the server!');
}

function clickHandler() {
    // console.log(translateButton);
    // console.log("Input is : ", textInput.value);

    var inputText = textInput.value;

    fetch(getTranslation(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputArea.innerText = translatedText;
    }).catch(errorHandler);
}

translateButton.addEventListener('click', clickHandler);