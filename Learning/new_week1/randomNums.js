//getting random nums in js is lowkey different than from c
let min = 1;
let max = 90;

//we can use the math method with its built in functions 
const randomNumber = Math.random() * (max - min) + min ;//this will return a random number between our max and min includig decimals 

//this will return a random whole / integer number 
const randomWholeNumber = Math.round(Math.random() * (max - min) + min );


console.log(randomNumber);
console.log(randomWholeNumber);







