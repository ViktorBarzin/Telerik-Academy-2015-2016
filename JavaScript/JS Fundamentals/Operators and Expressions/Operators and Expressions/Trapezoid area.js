var a = [5, 2, 8.5, 100, 0.222],
    b = [7, 1, 4.3, 200, 0.333],
    h = [12, 33, 2.7, 300, 0.555];
    
for (var i = 0 , len = a.length; i < len; i++) {
    area = ((a[i] + b[i]) / 2 )* h[i];
    console.log(area);
}