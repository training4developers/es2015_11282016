'use strict';

class Person {

	constructor(firstName, lastName) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	static create(name) {
		return new Person(...name.split(' '));
	}

	get amt() { return 3.14; }

	get firstName() {
		console.log('get first name');
		return this._firstName;
	}

	set firstName(value) {
		console.log('set first name');
		this._firstName = value;
	}

	get lastName() {
		return this._lastName;
	}

	set lastName(value) {
		this._lastName = value;
	}

	getFullName() {
		return this._firstName + ' ' + this._lastName;
	}

}

class Student extends Person {

	constructor(studentId, firstName, lastName) {
		super(firstName, lastName);
		this.studentId = studentId;
	}

	getRecordInfo() {
		return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
	}

	getFullName() {
		return super.getFullName();
	}	

}


function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.amt = 3000;

// Person.create = name => new Person(...name.split(' '));


// Person.prototype.getFullName = function() {
// 	return this.firstName + ' ' + this.lastName;
// };

// function Student(studentId, firstName, lastName) {
// 	this._super.call(this, firstName, lastName);
// 	this.studentId = studentId;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype._super = Person;

// Student.prototype.getRecordInfo = function() {
// 	return this.studentId + ' ' + this.lastName + ', ' + this.firstName;
// }

// console.log(typeof Person);

const p = new Student(1, 'Bob','Martin');

p.firstName = 'Timmy';

console.log(p.getFullName());
console.log(p.getRecordInfo());

console.log(p.PI);

//console.log(Person.create('Bob Smith'));
