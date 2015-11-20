//Write a function that makes a deep copy of an object.
//The function should work for both primitive and reference types.

var oldObject = {
    x: {
        z: 7
    },
    y: 7
};

function deepCopy(oldObject) {
    return JSON.parse(JSON.stringify(oldObject));
}

var newObject = deepCopy(oldObject);

newObject.x.z = 0;

console.log(oldObject);
console.log(newObject);