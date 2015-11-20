//Write a script that finds the max and min number from a sequence of numbers.

var numbers = [1, 2, 4, 3, 6, 23, 45, 20, 435, -10, -0.5, 3.14],
    i,
    len,
    temp,
    tempMin = numbers[0];
    tempMax = numbers[0];

for (i = 0, len = numbers.length; i < len; i+=1) {
    if (tempMin > numbers[i]) {
        tempMin = numbers[i];
    }
    if (tempMax < numbers[i]) {
        tempMax = numbers[i];
    }
}

console.log('Max number is: ' + tempMax + ' ' + 'Min Number is: ' + tempMin);