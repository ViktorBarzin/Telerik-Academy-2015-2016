function maxSequence(arr) {
    var i,
        len,
        currentnumber = arr[0],
        biggestseq = 1,
        counter = 1;

    for (i = 0, len = arr.length; i < len; i += 1) {
        if (arr[i] === arr[i + 1]) {
            counter += 1;
        } else {
            counter = 1;
        }
        if (biggestseq < counter) {
            currentnumber = arr[i];
            biggestseq = counter;
        }
    }
    console.log('The biggest sequence in' + ' ' + arr);
    console.log('is ' + biggestseq + ' times the number ' + currentnumber)
}

var inputArr = [0,0,0,0];
maxSequence(inputArr);