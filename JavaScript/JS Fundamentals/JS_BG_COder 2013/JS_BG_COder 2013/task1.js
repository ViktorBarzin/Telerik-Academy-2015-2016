function Solve(params) {
    
    var n = +params[0];
    for (var j = 0; j < params.length; j += 1) {
        params[j] = +params[j];
    }
    var currentSum = 0,
        maxSum = 0,
        i,
        len;

    for (i = 1, len = params.length; i < len; i += 1) {
        currentSum += params[i];
        if (currentSum >= maxSum) {
            maxSum = currentSum;
        }else if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return maxSum;

}

var input2 = ['6', '1', '3', '-5', '8', '7', '-6'];
var input = ['8', '1', '6', '-9', '4',' 4', '-2', '10', '-1'];
console.log(Solve(input));