'use strict';

const items = [1,2,3,4,5];

items.unshift(0);
items.pop();
items.splice(2, 1, 4, 4, 4);
// shift
// push
items.shift();
items.shift();

// slice - remove items immutablely
// concat - adds items immutablely

console.log(items);

const students = [
	{ id: 1, fn: 'Sang', grade: 'A' },
	{ id: 2, fn: 'Anupriya', grade: 'C' },
	{ id: 3, fn: 'Eric', grade: 'B' },
	{ id: 4, fn: 'Anand', grade: 'D' },
	{ id: 5, fn: 'Hang', grade: 'A' },
	{ id: 6, fn: 'Deepankar', grade: 'F' }
];

const ramsFriend = students.filter(function(student) {
	return student.id > 3;
}).map(function(student) {
	student.fn = student.fn.toUpperCase();
	return student;
}).find(function(student) {
	return student.grade === 'A';
});

console.log(students.includes(ramsFriend));

console.log(ramsFriend);

console.log([1,2,3,4,5].reduce(function(prevValue, currentValue) {
	return prevValue + currentValue;
}));





