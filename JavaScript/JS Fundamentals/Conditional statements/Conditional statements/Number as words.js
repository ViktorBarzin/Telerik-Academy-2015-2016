// JavaScript source code

function problem8(number) {
    var result;
        

    
        number *= 1;
        var hundreds = Math.floor(number / 100),
            tens = (Math.floor(number / 10)) % 10,
            digits = (number % 10),
            special = 10 + digits;

        switch (special) {
        case 11:
            special = "eleven";
            break;
        case 12:
            special = "twelve";
            break;
        case 13:
            special = "thirteen";
            break;
        case 14:
            special = "fourteen";
            break;
        case 15:
            special = "fifteen";
            break;
        case 16:
            special = "sixteen";
            break;
        case 17:
            special = "seventeen";
            break;
        case 18:
            special = "eighteen";
            break;
        case 19:
            special = "nineteen";
            break;
        }

        switch (hundreds) {
        case 1:
            hundreds = "one hundred ";
            break;
        case 2:
            hundreds = "two hundred ";
            break;
        case 3:
            hundreds = "three hundred ";
            break;
        case 4:
            hundreds = "four hundred ";
            break;
        case 5:
            hundreds = "five hundred ";
            break;
        case 6:
            hundreds = "six hundred ";
            break;
        case 7:
            hundreds = "seven hundred ";
            break;
        case 8:
            hundreds = "eight hundred ";
            break;
        case 9:
            hundreds = "nine hundred ";
            break;
        case 0:
            hundreds = "";
            break;
        }
        if (number % 100 !== 0 && number >= 100) {
            hundreds = hundreds + 'and ';
        }
        if (tens == 1 && digits > 0) {
            result = hundreds + special;
            hundreds = tens = digits = "";
            console.log('Problem 8: ' + number + " - " + result);
            return;
        }

        switch (tens) {
        case 1:
            tens = "ten";
            break;
        case 2:
            tens = "twenty ";
            break;
        case 3:
            tens = "thirty ";
            break;
        case 4:
            tens = "fourty ";
            break;
        case 5:
            tens = "fifty ";
            break;
        case 6:
            tens = "sixty ";
            break;
        case 7:
            tens = "seventy ";
            break;
        case 8:
            tens = "eighty ";
            break;
        case 9:
            tens = "ninety ";
            break;
        case 0:
            tens = "";
            break;
        }

        switch (digits) {
        case 1:
            digits = "one";
            break;
        case 2:
            digits = "two";
            break;
        case 3:
            digits = "three";
            break;
        case 4:
            digits = "four";
            break;
        case 5:
            digits = "five";
            break;
        case 6:
            digits = "six";
            break;
        case 7:
            digits = "seven";
            break;
        case 8:
            digits = "eight";
            break;
        case 9:
            digits = "nine";
            break;
        default:
            digits = "";
            break;
        }

        if (number === 0) {
            result = "Zero";
            hundreds = tens = digits = "";
            console.log('Problem 8: ' + number + " - " + result);
            return;
        }

        result = hundreds + tens + digits;
        console.log('Problem 8: ' + number + " - " + result);
        return;
    }

var numbers = [0, 9, 10, 12, 19, 25, 98, 98, 273, 400, 501, 617, 711, 999];
for (var i = 0, len = numbers.length; i < len; i++) {
    problem8(numbers[i]);
}