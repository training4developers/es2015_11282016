'use strict';

try {

	setTimeout(function() {
		console.log('all done');
		throw Error('the class is almost over...');
	}, 0);

	console.log('waiting');


} catch(err) {
	console.log('caught the error');
}