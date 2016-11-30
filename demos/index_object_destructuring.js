'use strict';

const person = {
	firstName: 'Bob',
	lastName: 'Martin'
};

function getFullName({ firstName, lastName }) {
	return lastName + ', ' + firstName;
}

console.log(getFullName(person));

//var { firstName, lastName } = person;

let firstName, lastName;

({ firstName, lastName } = person);

console.log(firstName);
console.log(lastName);

let { firstName: fn, lastName: ln } = person;

console.log(fn, ln);

const colors = [
	{ code: 'FFFFFF', name: 'white' },
	{ code: '000000', name: 'black' },
	{ code: 'FF0000', name: 'red' },
	{ code: '00FF00', name: 'green' },
	{ code: '0000FF', name: 'blue' },
];

let code, name;
let i = 0;
while ( ({ code, name } = colors[i]), i++, i < colors.length) {
	console.log(code, name);
}