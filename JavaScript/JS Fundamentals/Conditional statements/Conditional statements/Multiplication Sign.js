var a = [5, -2, -2, 0, -1],
    b = [2, -2, 4, -2.5, -0.5],
    c = [2, 1, 3, 4, -5.1];

for (var i = 0, len = a.length; i < len; i++) {

    if (a[i] !== 0 && b[i] !== 0 &&  c[i] !== 0) {
        if (a[i] > 0) {
            if (b[i] > 0) {
                if (c[i] > 0) {
                    console.log('+');
                } else {
                    console.log('-');
                }
            } else if (c[i] > 0) {
                console.log('-');
            } else if (c[i] < 0) {
                console.log('+');
            }
        } else if (b[i] > 0) {
            if (c[i] > 0) {
                console.log('-');
            } else if (c[i] < 0) {
                console.log('+');
            }
        } else if (b[i] < 0) {
            if (c[i] > 0) {
                console.log('+');
            } else if (c[i] < 0) {
                console.log('-');
            }
        }
    } else {
        console.log('0');
    }


}