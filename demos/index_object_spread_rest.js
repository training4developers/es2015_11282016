'use strict';

var info = {
	age: 1,
	height: 'tall',
	hairColor: 'brown'
};

var person = {
	firstName: 'Bob',
	lastName: 'Martin',
	//...info
};

const { firstName, ...otherProps } = person;

console.log(firstName);
console.log(otherProps);






