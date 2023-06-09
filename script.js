// use strict mode
// stricker ruler for writing code, it helps prevents common mistakes, improves code quality & provides better error handling

// DISALLOWING ***

'use strict';

// 01. undeclared variales
// x = 10;
// y = 20;
// console.log(x + y);

// 02. assigning values to read only properties (const)
// const num = 45;
// num = 55;

// 03. duplicate arguments

// function add(a, a) {
//   return a + a;
// }

// console.log(add(55, 65))

// 04. usig eval & arguments as variable names

let eval = 642
let arguments = 37097

// 05. Octal literals are not allowed: In strict mode, using octal literals (e.g., 0123) is not allowed and will result in a syntax error. Without strict mode, octal literals are interpreted as decimal numbers.