'use strict';


var id = Symbol();

const person = {
	id: 1,
	firstName: 'Eric',
	lastName: 'Greene'
};

person[id] = 10001;

var intuitClass = {
	name: 'ES2015',
	students: [
		'sang',
		'anjali',
		'eric',
		'raymond',
		'anand'
	]
};

intuitClass[Symbol.iterator] = function* () {
	for (let x=0; x<this.students.length; x++) {
		yield this.students[x];
	}
};


for (let student of intuitClass) {
	console.log(student);
}
