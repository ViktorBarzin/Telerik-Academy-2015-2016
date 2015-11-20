function count(array,num) {
    var counter = 0,
        number,
        search = 0,
        i,
        len;

    for (i = 0, len = array.length; i < len; i += 1) {
        if (num === array[i]) {
            counter += 1;
            search = array[i];
        }
    }
   return counter;
}

var inputArray = [1, 2, 3, 4, 3, 2, 1, 2, 3, 4, 3, 2, 1];
console.log(count(inputArray, 1));