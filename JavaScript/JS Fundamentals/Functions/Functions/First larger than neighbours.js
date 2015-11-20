function largerThanNeighbours(array) {
    var i,
        len,
        temp = 0,
        arrayInput = array.toString(10);
    for (i = 0, len = array.length; i < len; i += 1) {
        temp = array[i];
        if (array[i - 1] < temp && array[i + 1] < temp) {
            console.log(temp + ' is the first number bigger then its neighbours : ' + array[i - 1] + ' and ' + array[i + 1]);
            break;
        }
        
    }

}

var masivche = [55, 12, 60, 40, 30];
largerThanNeighbours(masivche);