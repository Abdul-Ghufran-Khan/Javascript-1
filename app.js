// Question 1
var input = +prompt("Enter positive integer in decimal form")
var round = Math.round(input)
var floor = Math.floor(input)
var ceil = Math.ceil(input)
console.log(`Number : ${input}`);
console.log(`Round off value : ${round}`);
console.log(`Floor value : ${floor}`);
console.log(`Ceil value : ${ceil}`);

// Question 2
var input1 = +prompt("Enter negative integer in decimal form")
var round1 = Math.round(input1)
var floor1 = Math.floor(input1)
var ceil1 = Math.ceil(input1)
console.log(`Number : ${input1}`);
console.log(`Round off value : ${round1}`);
console.log(`Floor value : ${floor1}`);
console.log(`Ceil value : ${ceil1}`);

// Question 3
var input2 = +prompt("Enter number")
var abs = Math.abs(input2)
console.log(`The absolute value of ${input2} is ${abs}`);

// Question 4
var random = Math.round(Math.random()*5)+1
console.log(`Random dice value : ${random}`);