'use strict';

function* nums() {

	let count = 3;

	while(count--) {
		yield count;
		console.log('while loop');
	}

}

const gen  = nums();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


// for (let num of nums()) {
// 	console.log(num);
// 	console.log('for of loop');
// }
