var examples = [1, 2, 3, 4, 9, 37, 97, 51, -3, 0];
function solution(number) {
    if (number > 100) {
        return "Number must not be larger than 100"
    }
    if (number <= 3) {
        return number > 1;
    }
    if (number % 2 == 0 || number % 3 == 0) {
        return false;
    }
    for (var i = 5; i * i <= number; i += 6) {
        if (number % i == 0 || number % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}
for (var index = 0; index < examples.length; index++) {
    console.log(examples[index] + " is prime?: \t" + solution(examples[index]));
}