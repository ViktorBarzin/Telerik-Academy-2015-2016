/*Problem 6. Group people

Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
Use Array#reduce
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
arrayOfPeople.push((makePerson('pesho', 'peshov', 15, 'male')));
arrayOfPeople.push((makePerson('mihail', 'ivanov', 56, 'female')));
arrayOfPeople.push((makePerson('luboslav', 'pavlov', 63, 'female')));
arrayOfPeople.push((makePerson('dimitar', 'balabanov', 26, 'female')));
arrayOfPeople.push((makePerson('ivan', 'nqkoisiev', 29, 'female')));
arrayOfPeople.push((makePerson('jani', 'petrov', 35, 'female')));
arrayOfPeople.push((makePerson('vencislav', 'sokalchev', 41, 'female')));
arrayOfPeople.push((makePerson('ivan', 'kaci', 43, 'male')));
arrayOfPeople.push((makePerson('stamat', 'nqkoisi', 55, 'male')));


var groupPeople = function (personArr) {
    personArr = personArr.sort(
		function (a, b) {
		    return a.firstname.toLowerCase().localeCompare(b.firstname.toLowerCase());
		}
	);
    function groupedBy(group, person) {
        var fnameLetter = person.firstname[0].toLowerCase();
        if (!group.hasOwnProperty(fnameLetter)) {
            group[fnameLetter] = [];
        }
        group[fnameLetter].push(person);
        return group;
    }
    function sortFname(fPerson, sPerson) {
        return fPerson.fname[0] - sPerson.fname[0];
    }
    return personArr.reduce(groupedBy, {});
};
var result = groupPeople(arrayOfPeople);
console.log(result);