var examples = [5, 8, 0, 15, 5343, 62241];

for (var i = 0, len = examples.length; i < len; i++) {

    var decimalToBinary = examples[i].toString(2),
        gotoThirdBit = decimalToBinary / 1000,
        turnIntoInt = Math.round(gotoThirdBit),
        getThirdBit = turnIntoInt % 10,
        result = getThirdBit;
    console.log(examples[i], 'bit #3 e: ', result);
}