'use strict';

import 'babel-core/register';
import 'babel-polyfill';

function st(delay) {

	return new Promise(resolve => {

		setTimeout(function() {
			console.log('resolved');
			resolve('test');
		}, delay);

	});

}

async function doIt() {

	const output = await st(2000);

	return output;

}

console.log(doIt());
