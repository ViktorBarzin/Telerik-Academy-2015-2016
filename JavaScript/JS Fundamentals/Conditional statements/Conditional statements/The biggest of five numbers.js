var a = [5, -2, -2, 0, -3],
    b = [2, -22, 4, -2.5, -0.5],
    c = [2, 1, 3, 0, -1.1],
    d = [4, 0, 2, 5, -2],
    e = [1, 0, 0, 5, -0.1];

for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] > b[i] && a[i] > c[i] && a[i] > d[i] && a[i] > e[i]) {
        console.log('Biggest is ', a[i]);
    } else if (b[i] > a[i] && b[i] > c[i] && b[i] > d[i] && b[i] > e[i]) {
        console.log('Biggest is ', b[i]);
    }
    else if (c[i] > b[i] && c[i] > a[i] && c[i] > d[i] && c[i] > e[i]) {
        console.log('Biggest is ', c[i]);
    }

    else if (d[i] > b[i] && d[i] > c[i] && d[i] > a[i] && d[i] > e[i]) {
        console.log('Biggest is ', d[i]);
    }

    else if (e[i] > b[i] && e[i] > c[i] && e[i] > d[i] && e[i] > a[i]) {
        console.log('Biggest is ', e[i]);
    }
}