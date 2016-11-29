'use strict';

const age = 34;

const fieldName = 'employer';

const t = {
	name: 'Bob Smith',
	age,

	getName: function() {
		return this.name;
	},

	getName2() {
		return this.name;
	},

	get city() {
		console.log('get city');
		return this._city;
	},

	set city(value) {
		console.log('set city');
		this._city = value;
	}, 

	[ fieldName ]: 'Intuit'

};

// Object.defineProperty(t, 'city', {
// 	configurable: true,
// 	enumerable: true,
// 	get: function() {
// 		console.log('get city');
// 		return this._city;
// 	},
// 	set: function(value) {
// 		console.log('set city');
// 		this._city = value;
// 	}
// });

t.city = 'Mountain View';
console.log(t.city);
console.log(t.age);
console.log(t[fieldName]);
console.log(t.employer);