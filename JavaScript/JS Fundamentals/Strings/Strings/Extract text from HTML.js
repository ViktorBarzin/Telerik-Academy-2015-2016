﻿/*Problem 6. Extract text from HTML

Write a function that extracts the content of a html page given as text.
The function should return anything that is in a tag, without the tags.
Example:

<html>
  <head>
    <title>Sample site</title>
  </head>
  <body>
    <div>text
      <div>more text</div>
      and more...
    </div>
    in body
  </body>
</html>
Result: Sample sitetextmore textand more...in body*/


function extract(text) {
    var regex = /<(.|\n)*?>/g;
    var resultText = text.replace(regex, '');
    return resultText;
}


var input = '<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>';
console.log(extract(input));