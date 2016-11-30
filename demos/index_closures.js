'use strict';

function outer() {

	let t = 42;

	setTimeout(function y() {
		t = 56;
	}, 2000); 

	function inner() {
		console.log(t);
	}

	return inner;
}

const fn = outer();

fn();

setTimeout(function() {
	fn();
}, 4000);


