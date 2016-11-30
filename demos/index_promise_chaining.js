'use strict';

const youngMan = new Promise(function youngLady(resolve, reject) {

	setTimeout(function() {
		resolve('she is madly in love with him...');
	}, 2000);

});

youngMan.then(function(results) {
	console.log(results);
	console.log('yay I am getting married...');

	console.log('select a venue');
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve('venue was selected');
		}, 3000);
	});

}).then(function(results) {

	console.log(results);

}).catch(function(results) {
	console.log(results);
	console.log('time to sign up for eHarmony');
});

console.log('waiting');