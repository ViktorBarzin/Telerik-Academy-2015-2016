var exampleX = [1, 2.5, 0, 2.5, 2, 4, 2.5, 2, 1, -100],
    exampleY = [2, 2, 1, 1, 0, 0, 1.5, 1.5, 2.5, -100],
    radius = 3;
function solution(x, y) {
    var isInCircle = (x - 1) * (x - 1) + (y - 1) * (y - 1) <= radius * radius,
        isOutOfRectangle = !((x >= -1 && x <= -1 + 6) && (y <= 1 && y >= 1 - 2)),
        result = (isInCircle && isOutOfRectangle) ? "yes" : "no";
    return result;
}
for (var index = 0; index < Math.min(exampleX.length, exampleY.length) ; index++) {
    console.log("[" + exampleX[index] + ", " + exampleY[index] + "] inside K & outside of R?: \t" + solution(exampleX[index], exampleY[index]));
}