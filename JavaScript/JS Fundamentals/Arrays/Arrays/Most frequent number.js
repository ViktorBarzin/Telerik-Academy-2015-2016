function mode(array) {
    var i,
        el,
        modeMap,
        maxCount,
        maxEl;
    if (array.length === 0)
        return null;
    modeMap = {};
    maxEl = array[0], maxCount = 1;
    for (i = 0; i < array.length; i++) {
        el = array[i];
        if (modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if (modeMap[el] > maxCount) {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
}

var inputArray = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];
console.log(mode(inputArray) + ' is the most frequent number');