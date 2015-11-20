var examplesForX = [0, -5, -4, 1.5, -4, 100, 0, 0.2, 0.9, 2],
    examplesforY = [1, 0, 5, -3, -3.5, -30, 0, -0.8, -4.93, 2.655];

for (var i = 0, len = examplesForX.length; i < len; i++) {
    if (examplesForX[i] < 5 && examplesforY[i] <5) {
        console.log(examplesForX[i], examplesforY[i], 'true');
    }
    else {
        console.log(examplesForX[i], examplesforY[i], 'false');
    }
}