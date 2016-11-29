'use strict';

const accounts = new Map();

accounts.set(1, { desc: 'Checking Account', amt: 1000 });
accounts.set(2, { desc: 'Savings Account', amt: 2000 });

console.log(accounts.entries());

console.log(accounts.get(2));

const accounts2 = {
	'1': { desc: 'Checking Account', amt: 1000 }
};

//accounts2[{ someProp: 1}] = 'test';

// console.log(accounts2.toString());

console.log(Object.entries(accounts2));

const accounts2Map = new Map(Object.entries(accounts2));

const y = { someProp: 1};

accounts2Map.set(y, "test");
console.log(accounts2Map.get(y));

console.log(accounts2Map.entries());





