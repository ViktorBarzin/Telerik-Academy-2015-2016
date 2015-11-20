function reverseNumber(number) {
    var stringNumber = number.toString(),
        i,
        temp = '',
        len = stringNumber.length - 1;
    for (i = len; i >= 0 ; i -= 1) {
        temp = temp + stringNumber[i];
    }
    return temp;
}

console.log(reverseNumber(256));
console.log(reverseNumber(123.45));