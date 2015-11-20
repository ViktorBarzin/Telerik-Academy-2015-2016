/*Problem 5. Youngest person

Write a function that finds the youngest male person in a given array of people and prints his full name
Use only array methods and no regular loops (for, while)
Use Array#find*/



function makePerson(fname, lname, age, gender) {
    switch (gender) {
        case 'female':
            gender = true; break;

        default:
            gender = false;
    }
    return {
        firstName: fname,
        lastName: lname,
        age: age,
        gender: gender
    }
}

var arrayOfPeople = [];

arrayOfPeople.push((makePerson('gosho', 'goshov', 2, 'female')));
arrayOfPeople.push((makePerson('pesho', 'peshov', 14, 'male')));
arrayOfPeople.push((makePerson('mihail', 'ivanov', 56, 'female')));
arrayOfPeople.push((makePerson('luboslav', 'pavlov', 63, 'male')));
arrayOfPeople.push((makePerson('dimitar', 'balabanov', 26, 'female')));
arrayOfPeople.push((makePerson('ivan', 'nqkoisiev', 29, 'male')));
arrayOfPeople.push((makePerson('jani', 'petrov', 35, 'female')));
arrayOfPeople.push((makePerson('vencislav', 'sokalchev', 41, 'male')));
arrayOfPeople.push((makePerson('ivan', 'kaci', 43, 'female')));
arrayOfPeople.push((makePerson('stamat', 'nqkoisi', 55, 'female')));

if (!Array.prototype.find) {
    Array.prototype.find = function (callback) {
        var i, len = this.length;
        for (i = 0; i < len; i += 1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    };
}
var youngestM =
    arrayOfPeople.sort(function(a, b) {
        return a.age - b.age;
    }).find(function(item) {
        return !item.gender;
    });

console.log('the youngest male is : ' + youngestM.firstName +' '+ youngestM.lastName+ 'at age : ' + youngestM.age);