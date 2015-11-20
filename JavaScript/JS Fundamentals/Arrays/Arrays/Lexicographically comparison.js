function lexComparison(charArr1, charArr2) {
    var i,
        len;

    charArr1.toString();
    charArr2.toString();

    for (i = 0, len = charArr1.length; i < len; i += 1) {
        if (charArr1[i] > charArr2[i]) {
            console.log(charArr1[i] + ' is bigger than ' + charArr2[i]);
        }else if (charArr1[i] === charArr2[i]) {
            console.log(charArr1[i] + ' is equal to ' + charArr2[i]);
        } else {
            console.log(charArr2[i] + ' is bigger than ' + charArr1[i]);
        }
    }
}

lexComparison('', '');