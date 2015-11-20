/*Has property

Write a function that checks if a given object contains a given property.

var obj  = …;
var hasProp = hasProperty(obj, 'length');*/



var obj = {
    size: 5,
    age: 10,
    length : 3

}


function hasProperty(object, property) {

    if (object.hasOwnProperty(property)) {
        return object + ' has the property ' + property;
    } else {
        return object + ' doesnt have the property ' + property;
    }
}


console.log(hasProperty(obj, 'length'));