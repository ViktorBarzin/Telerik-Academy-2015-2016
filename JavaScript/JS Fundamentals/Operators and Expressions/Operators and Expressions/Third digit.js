var example = [5, 701, 1732, 9703, 877, 777877, 9999799];
for (var i = 0, len = example.length; i < len; i += 1) {
    var num = example[i];
    var result = ((num / 100) | 0) % 10 == 7;
    console.log(example[i], result);
}