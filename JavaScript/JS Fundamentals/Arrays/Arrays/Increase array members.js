function arrayTimesFive() {
    var array = [],
        length = 20,
        i;
    for (i = 0; i < length; i += 1) {

        array.push(i*5);
    }
    return array;
}

console.log(arrayTimesFive());