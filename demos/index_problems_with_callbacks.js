'use strict';


setTimeout(function() {
		console.log('a');
		setTimeout(function() {
				console.log('b');
				setTimeout(function() {
						console.log('c');
				}, 1000);
		}, 3000);
}, 5000);

let counter = 0;
counter++;
setTimeout(function() {
		console.log('a');
		counter--;
		if (counter === 0) {
			done();
		}

}, 1000);

counter++;
setTimeout(function() {
		console.log('b');
		counter--;
		if (counter === 0) {
			done();
		}
}, 4000);

counter++;
setTimeout(function() {
		console.log('c');
		counter--;
		if (counter === 0) {
			done();
		}
}, 3000);

counter++;
setTimeout(function() {
		console.log('d');
		counter--;
		if (counter === 0) {
			done();
		}
}, 2000);

function done() {

}


