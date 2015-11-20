function largerThanNeighbours(array, pos) {
    var i,
        len,
        temp = 0,
        arrayInput = array.toString(10);
    for (i = 0, len = array.length; i < len; i += 1) {
        temp = array[pos];
            if (array[pos - 1] < temp && array[pos + 1] < temp) {
                console.log(temp + ' is bigger then ' + array[pos -1] + ' and ' + array[pos + 1]);
                break;
            }
         else {
            console.log(temp + ' is not bigger than ' + array[pos -1] + ' and ' + array[pos + 1]);
            break;
        }    
    }
  
}

var masivche = [55,120,60,40,30];
largerThanNeighbours(masivche,3);