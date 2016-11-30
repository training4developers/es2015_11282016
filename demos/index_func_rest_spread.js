'use strict';

//function doIt(a,b,...c) {
function doIt(a,b,c) {
	console.log(a,b,c);
	//console.log(arguments);
}

//doIt(1,2,3,4,5,6,7);

//doIt([1,2,3]);

doIt.apply(null, [1,2,3]);

doIt(...[1,2,3]);

