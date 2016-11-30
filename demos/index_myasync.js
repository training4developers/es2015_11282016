'use strict';

function tp(delay) {
	return new Promise(resolve => {
		setTimeout(() => {
			console.log('waited: ' + delay);
			resolve();
		}, delay);
	});
}

function myAsync(fn) {
	
	let asyncPromise = Promise.resolve();
	let done, value;
		
	const gen = fn();
	
	while (!({ value } = gen.next()).done) {
	//while (({ done, value } = gen.next()), !done) {
		let nextPromise = value;
		asyncPromise = asyncPromise.then(() => nextPromise);
	}

	return asyncPromise;
			
}

console.log('started');
myAsync(function*() {
	
	yield tp(4000);
	yield tp(2000);
	
}).then(() => console.log('done'));
console.log('waiting');