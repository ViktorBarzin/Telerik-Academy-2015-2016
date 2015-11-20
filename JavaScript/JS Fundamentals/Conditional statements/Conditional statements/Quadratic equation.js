var a = [2, -1, -0.5, 5],
    b = [5, 3, 4, 2],
    c = [-3, 0, -8, 8],
    D,
    x1,
    x2;

for (var i = 0, len = a.length; i < len; i++) {
    D = b[i] * b[i] - 4 * a[i] * c[i];
    if (D > 0) {
        x1 = (-b[i] + Math.sqrt(D)) / (2 * a[i]);
        x2 = (-b[i] - Math.sqrt(D)) / (2 * a[i]);
    } else if (D === 0) {
        x1 = -b[i] / (2 * a[i]);
        x2 = x1;
    } else {
        console.log('nqma koreni');
        break;
    }
    console.log('x1 is =' , x1, 'x2 is =', x2);
}