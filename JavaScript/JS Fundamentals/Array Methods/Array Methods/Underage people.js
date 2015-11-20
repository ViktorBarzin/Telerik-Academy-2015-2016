/*Problem 3. Underage people

Write a function that prints all underaged persons of an array of person
Use Array#filter and Array#forEach
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

arrayOfPeople.push((makePerson('gosho', 'goshov', 35, 'female')));
arrayOfPeople.push((makePerson('pesho', 'peshov', 15, 'male')));
arrayOfPeople.push((makePerson('mihail', 'ivanov', 56, 'female')));
arrayOfPeople.push((makePerson('luboslav', 'pavlov', 63, 'female')));
arrayOfPeople.push((makePerson('dimitar', 'balabanov', 26, 'female')));
arrayOfPeople.push((makePerson('ivan', 'nqkoisiev', 29, 'female')));
arrayOfPeople.push((makePerson('jani', 'petrov', 35, 'female')));
arrayOfPeople.push((makePerson('vencislav', 'sokalchev', 41, 'female')));
arrayOfPeople.push((makePerson('ivan', 'kaci', 43, 'female')));
arrayOfPeople.push((makePerson('stamat', 'nqkoisi', 55, 'female')));

//console.log(arrayOfPeople);

var underaged = arrayOfPeople.filter(function(item) {
    return item.age < 18;
}).forEach(function(item) {
    console.log(item);
});

