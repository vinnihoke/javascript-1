// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

const myFunction = () => {
	console.log("Function was invoked!");
};

console.log(myFunction());

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

const anotherFunction = (param) => {
	return param + ' it worked!';
};

console.log(anotherFunction('Word,'));


// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

const add = (param1, param2) =>  param1 + param2;

console.log(add(5318007, 1));


// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

const subrtact = (param1, param2) => param1 - param2;

console.log(subrtact(3704555,1));

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

const triple = (num) => num.map(x => x * 3);

console.log(triple([3,5,6,7]));


