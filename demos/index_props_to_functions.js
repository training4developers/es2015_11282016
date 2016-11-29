'use strict';

var person = {

	firstName: 'Bob',
	lastName: 'Smith',
	getFullName: function() {
		return this.firstName + ' ' + this.lastName;
	}

};

var person2 = {
	firstName: 'Lily',
	lastName: 'Bean'
};

Object.preventExtensions(person2);

person2.getFullName = person.getFullName;

console.log(person2.getFullName());

console.log(person.getFullName === person2.getFullName);

