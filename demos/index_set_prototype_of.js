'use strict';

const items = {};

const myCoolStuff = {
	doIt: function() {
		console.log('did it!');
	}
};

Object.setPrototypeOf(items, Array.prototype);

Object.setPrototypeOf(Array.prototype, myCoolStuff);

items.push(1);

console.log(Object.getPrototypeOf(items));
console.log(items);


