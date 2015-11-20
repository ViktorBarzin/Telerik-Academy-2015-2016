/*Problem 1. Make person

Write a function for creating persons.
Each person must have firstname, lastname, age and gender (true is female, false is male)
Generate an array with ten person with different names, ages and genders*/

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
arrayOfPeople.push((makePerson('pesho', 'peshov', 15, 'male')));
arrayOfPeople.push((makePerson('mihail', 'ivanov', 56, 'female')));
arrayOfPeople.push((makePerson('luboslav', 'pavlov', 63, 'female')));
arrayOfPeople.push((makePerson('dimitar', 'balabanov', 26, 'female')));
arrayOfPeople.push((makePerson('ivan', 'nqkoisiev', 29, 'female')));
arrayOfPeople.push((makePerson('jani', 'petrov', 35, 'female')));
arrayOfPeople.push((makePerson('vencislav', 'sokalchev', 41, 'female')));
arrayOfPeople.push((makePerson('ivan', 'kaci', 43, 'female')));
arrayOfPeople.push((makePerson('stamat', 'nqkoisi', 55, 'female')));

console.log(arrayOfPeople);