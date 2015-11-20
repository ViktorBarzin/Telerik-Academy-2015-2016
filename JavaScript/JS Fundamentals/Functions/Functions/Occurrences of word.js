var inputText = 'Write a function that counts how many times given number appears in given array.Write a test function to check if the function is working correctly.';
function occurences(wholeText, word) {
    var text = wholeText.toString(),
        search = word.toString(),
        wordLength = search.length,
        counter = 0,
        equal = true,
        temp,
        i2,
        len2,
        i,
        len;
        
    
    
    for (i = 0, len = text.length; i < len; i += 1) {
        if (search[0] === text[i]) {
            temp = text[i];
            for (i2 = 0; i2 < wordLength; i2 += 1) {
                if (text[i + i2] !== search[i2]) {
                    equal = false;
                }
            }
            if (equal === true) {
                counter += 1;
            }
            equal = true;
        }
    }
    return counter;
}

console.log(occurences( inputText, 'e'));