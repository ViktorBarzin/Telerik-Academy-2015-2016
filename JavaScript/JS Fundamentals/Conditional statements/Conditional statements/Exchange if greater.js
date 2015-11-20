var a = [5, 3, 5.5],
    b = [2, 4, 4.5],
    exchange;
for (var i = 0, len = a.length; i < len; i++) {
    if (a[i] > b[i]) {
        exchange = b;
        b = a;
        a = exchange;
    }
    console.log('a = ', a[i], 'b =', b[i]);
}

