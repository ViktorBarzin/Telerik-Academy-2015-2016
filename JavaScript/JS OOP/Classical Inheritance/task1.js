function solve() {
	function isString(obj) {
		return typeof obj === 'string';
	}

	function isValidName(str) {
		return (str.length >= 3 && str.length <= 20) && /^[A-z\u00C0-\u00ff\s'\.,-\/#!$%\^&\*;:{}=\-_`~()]+$/.test(str);
	}

	function isValidAge(num) {
		return num >= 0 && num <= 150;
	}

	function capitalizeFirstLetter(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

	var Person = (function() {
		function Person(firstname, lastname, age) {
			if (!isString(firstname) || !isValidName(firstname)) {
				throw new Error('Invalid first name.');
			}

			if (!isString(lastname) || !isValidName(lastname)) {
				throw new Error('Invalid last name.');
			}

			if (!isValidAge(age)) {
				throw new Error('Invalid age.');
			}

			this._firstname = firstname;
			this._lastname = lastname;
			this._age = age;
		}

		Person.prototype = {
			get firstname() {
				return this._firstname;
			},
			set firstname(newName) {
				if (!isString(newName) || !isValidName(newName)) {
					throw new Error('Invalid first name.');
				}

				this._firstname = newName;
			},
			get lastname() {
				return this._lastname;
			},
			set lastname(newName) {
				if (!isString(newName) || !isValidName(newName)) {
					throw new Error('Invalid last name.');
				}

				this._lastname = newName;
			},
			get age() {
				return this._age;
			},
			set age(newAge) {
				if (!isValidAge(newAge)) {
					throw new Error('Invalid age.');
				}

				this._age = newAge;
			},
			get fullname() {
				return this.firstname + ' ' + this.lastname;
			},
			set fullname(fullname) {
				var names = fullname.split(' '),
					firstName = names[0].toLowerCase(),
					lastName = names[1].toLowerCase();

				firstName = capitalizeFirstLetter(firstName);
				lastName = capitalizeFirstLetter(lastName);

				this.firstname = firstName;
				this.lastname = lastName;
			},
			introduce: function() {
				return 'Hello! My name is ' + this.firstname + ' ' + this.lastname +
					' and I am ' + this.age + '-years-old';
			}
		};

		return Person;
	}());

	return Person;
}
