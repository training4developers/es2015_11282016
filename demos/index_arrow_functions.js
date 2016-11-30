'use strict';

const add = (a, b) => {
	console.log(arguments);
	return a + b;
};

const sqr = a => a ** 2;

const pi = () => 3.14;

// function pi() {
// 	return 3.14;
// }

//const add = function(a,b) { return a + b; };

console.log(add(1,2));
console.log(sqr(5));
console.log(pi());