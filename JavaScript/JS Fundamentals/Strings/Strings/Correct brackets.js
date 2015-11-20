/*Problem 2. Correct brackets

Write a JavaScript function to check if in a given expression the brackets are put correctly.
Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).*/

function correctBr(str) {
    var i,
        len,
        counterO = 0,
        counterC = 0;

    for (i = 0, len = str.length; i < len; i += 1) {
        if (str[i] === '(') {
            counterO += 1;
        }else if (str[i] === ')') {
            counterC += 1;
        }

    }
    if (counterO !== counterC) {
        console.log('nevaliden izraz');
    } else {
        console.log('validen izraz');
    }
}


correctBr('1+(1+2)+ ((3+2)*(8-1))');