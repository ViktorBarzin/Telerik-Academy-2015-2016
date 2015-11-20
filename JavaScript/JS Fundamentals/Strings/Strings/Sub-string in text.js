/*Problem 3. Sub-string in text

Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).*/


function occurrences(string, subString, allowOverlapping){

    string += "";
    subString += "";
    if(subString.length<=0) return string.length+1;

    var n=0, pos=0;
    var step=(allowOverlapping)?(1):(subString.length);

    while(true){
        pos=string.indexOf(subString,pos);
        if(pos>=0){ n++; pos+=step; } else break;
    }
    return(n);
}
var string = "We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.";
console.log(occurrences(string, 'in'));
