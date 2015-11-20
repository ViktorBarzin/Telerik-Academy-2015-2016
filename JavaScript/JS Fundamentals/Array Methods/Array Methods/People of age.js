/*Problem 2. People of age

Write a function that checks if an array of person contains only people of age (with age 18 or greater)
Use only array methods and no regular loops (for, while)*/

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

arrayOfPeople.push((makePerson('gosho', 'goshov', 25, 'female')));
arrayOfPeople.push((makePerson('pesho', 'peshov', 35, 'male')));
arrayOfPeople.push((makePerson('mihail', 'ivanov', 52, 'female')));
arrayOfPeople.push((makePerson('luboslav', 'pavlov', 63, 'female')));
arrayOfPeople.push((makePerson('dimitar', 'balabanov', 26, 'female')));
arrayOfPeople.push((makePerson('ivan', 'nqkoisiev', 29, 'female')));
arrayOfPeople.push((makePerson('jani', 'petrov', 35, 'female')));
arrayOfPeople.push((makePerson('vencislav', 'sokalchev', 41, 'female')));
arrayOfPeople.push((makePerson('ivan', 'kaci', 43, 'female')));
arrayOfPeople.push((makePerson('stamat', 'nqkoisi', 55, 'female')));

//console.log(arrayOfPeople);

var ofAgeOnly = arrayOfPeople.every(function(item) {
    return item.age >= 18;
});

console.log('All of the people are at least 18 : ' + ofAgeOnly);
