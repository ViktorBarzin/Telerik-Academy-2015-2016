/*Problem 4. Parse tags

You are given a text. Write a function that changes the text in all regions:

<upcase>text</upcase> to uppercase.
<lowcase>text</lowcase> to lowercase
<mixcase>text</mixcase> to mix casing(random)
Example: We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.

The expected result:
We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.

Note: Regions can be nested.*/

function upCase(text) {
    var regex = /<(.|\n)*?>/g;
    var resultUpCase = text.replace(regex, '').toUpperCase();
    return resultUpCase;
}

function lowCase(text) {
    var regex = /<(.|\n)*?>/g;
    var resultLowCase = text.replace(regex, '').toLowerCase();
    return resultLowCase;
}

function mixCase(text) {
    var i, len,
        words,
        string ='',
        regex = /<(.|\n)*?>/g;
    var resultMixCase = text.replace(regex, '');
    for (i = 0, len = text.length; i < len; i += 1){
        var toLowerCase = Math.round(Math.random());
        words = resultMixCase.charAt(i);
        string += (toLowerCase ? words.toUpperCase() : words.toLowerCase());
        console.log( words);
    }
}

var str = '<upcase>TeXt</upcase>';
console.log(lowCase(str));

