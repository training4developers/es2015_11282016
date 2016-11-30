'use strict';

const doIt = () => {

	console.log(this);

	//const that = this;

	const inner = () => {
		console.log(this);
	};

	inner();
};

var o = {
	id: 1,
	doIt: doIt
};

o.doIt();



