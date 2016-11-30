'use strict';

function doIt(a,b,c) {
	console.log(this);
	console.log(a,b,c);
}

doIt();

const o = {
	id: 1,
	doIt: doIt
};

o.doIt();

const n = doIt;

n();

console.log(doIt === o.doIt);

o.doIt.call({ id: 2}, 1, 2, 3);
o.doIt.apply({ id: 2}, [ 1, 2, 3 ]);

const fn = o.doIt.bind({ id: 3}, 1, 2);

fn(9);
