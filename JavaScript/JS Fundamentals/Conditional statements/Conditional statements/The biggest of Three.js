var a = [5, -2, -2, 0, -0.1],
    b = [2, -2, 4, -2.5, -0.5],
    c = [2, 1, 3, 5, -1.1];

for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] > b[i] && a[i] > c[i]) {
        console.log('The biggets num is : ', a[i]);
    }
    else if (b[i] > a[i] && b[i] > c[i]) {
        console.log('The biggest num is : ', b[i]);
    } else {
        console.log('The Biggest num is : ', c[i]);
    }


}