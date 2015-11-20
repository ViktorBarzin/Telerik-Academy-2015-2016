/*Problem 5. nbsp

Write a function that replaces non breaking white-spaces in a text with &nbsp;*/


function replaceNbsp(text) {
    var regex = /\W+/g;
    var resultText = text.replace(regex, ' &nbsp ');
    return resultText;
}

console.log(replaceNbsp('This is a text'));