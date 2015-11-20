/*Problem 1. Reverse string

Write a JavaScript function that reverses a string and returns it.*/

function reverseStr(string) {
    var i,
        len = string.length,
        arr = [];
    for (i = len - 1; i >= 0; i -= 1) {
        arr.push( string[i]);
    }
    return arr;
}


var str = 'abcdefg';
console.log(reverseStr(str));