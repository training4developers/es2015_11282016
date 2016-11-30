'use strict';

const nums = [ 1, 2, 3, 4, 5 ];

let [ firstNum, sang, ...others ] = nums;

//let fn = nums.slice(0,1);

// let firstNum, sang;

// [ firstNum, sang ] = nums;

// var firstNum = nums[0];
// var sang = nums[1];

console.log(firstNum, sang);
console.log(others);

const a = [1,2];
const b = [3,4];
const c = [5,6];

console.log([ a, b, c ]);
console.log([].concat(a).concat(b).concat(c));
console.log([...a, 7, ...b, ...c, 7]);




