//Problem 2. Remove elements
//Write a function that removes all elements with a given value.
//Attach it to the array type.
//Read about prototype and how to attach methods.

function removeEl(array,num) {
    var 
        index,
        i,
        len;
    for (i = 0, len = array.length; i < len; i += 1) {
        if (array[i] === num) {
            index = array.indexOf(array[i]);
            array.splice(index, 1);
        }
    }
    return array;
}


var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(removeEl(arr, 1));