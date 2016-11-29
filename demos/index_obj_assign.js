'use strict';

let person = {
	firstName: 'Bob',
	lastName: 'Smith',

	address: {
		city: 'Mountain View',
		state: 'CA'
	}
};

Object.freeze(person);

// all changes below this line...

//person.firstName = 'Tim';

// task: 
// person's first name property to be updated to Tim

//person = { firstName: 'Tim', lastName: person.lastName };

const newAddress = Object.assign({}, person.address, { city: 'Palo Alto'});


person = Object.assign({}, person, { firstName: 'Tim', address: newAddress });

console.log(person.firstName);




