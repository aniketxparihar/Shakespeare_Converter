var normieText = document.querySelector("#normie");
var btnTranslate = document.querySelector("#normie-to-shakespearean")
var outputDiv=document.querySelector("#shakespearean")
var serverURL = "https://api.funtranslations.com/translate/shakespeare.json";

function clickHandler(){
    console.log("hello")
    var urlQuery = normieText.value;
    fetch(makeURL(urlQuery))
        .then(response => response.json())
        .then(json => {
            var shakespeareanText = json.contents.translated;
            outputDiv.innerText = shakespeareanText;
        }).catch(errorHandler);
}

function makeURL(query)
{
    return serverURL + "?"+"text=" + query;
}

function errorHandler(error) {
    alert("There seems to be some problem with the server! Try again after an hour.")
}

btnTranslate.addEventListener("click", clickHandler);