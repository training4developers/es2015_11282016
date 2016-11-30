'use strict';

var x=0,y=0,funcs=[];

for (; x<5; x++) {
	// modify the code between here
	// you may NOT use the variable y at all
	// you cannot output the value of x in the first loop
	const t = x;
	funcs.push(function() {
		console.log(t);
	});
	// and here only...
}

for (; y<5; y++) {
	funcs[y]();
}