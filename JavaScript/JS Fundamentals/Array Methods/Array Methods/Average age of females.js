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
arrayOfPeople.push((makePerson('luboslav', 'pavlov', 63, 'male')));
arrayOfPeople.push((makePerson('dimitar', 'balabanov', 26, 'female')));
arrayOfPeople.push((makePerson('ivan', 'nqkoisiev', 29, 'female')));
arrayOfPeople.push((makePerson('jani', 'petrov', 35, 'male')));
arrayOfPeople.push((makePerson('vencislav', 'sokalchev', 41, 'female')));
arrayOfPeople.push((makePerson('ivan', 'kaci', 43, 'female')));
arrayOfPeople.push((makePerson('stamat', 'nqkoisi', 55, 'male')));

var avgFemaleAge =
    arrayOfPeople.filter(function(item) {
        return item.gender;
    }).forEach(function (item,i, arr) {
        console.log(item.age / arr.length);
    })