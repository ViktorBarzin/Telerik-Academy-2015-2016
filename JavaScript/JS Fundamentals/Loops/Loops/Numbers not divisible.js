//Write a script that prints all the numbers from 1 to N,
//that are not divisible by 3 and 7 at the same time

var result = 1,
    n = 101;

while (result < n) {
    while (!(result % 3) && !(result % 7)) {
        console.log(result);
        result += 1;
    }
    result += 1;
}