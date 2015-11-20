function swap(items, firstIndex, secondIndex) {
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function selectionSort(items) {

    var len = items.length,
        min,
        i,
        j;

    for (i = 0; i < len; i+=1) {

        min = i;

        for (j = i + 1; j < len; j+=1) {
            if (items[j] < items[min]) {
                min = j;
            }
        }

        if (i !== min) {
            swap(items, i, min);
        }
    }

    return items;
}

console.log(selectionSort([]));