/*QUESTION 1
1.Define and differentiate between variables and constants in JavaScript
    Variables are containers used to store information in java script that can be edited while constants are containers in java script that cannot be edited once declared 

2.Write a JavaScript program that stores the name of a country in Africa and its population
using variables, and the current year as a constant.
*/
var name = "Uganda";
const year = 2024;
var population = 34000000;
//We create variables for the country, population and a constant for the year
//We then use print statements to display the content
console.log(`The country in Africa is called ${name}`);
console.log(`It has a population of over ${population} people`);
console.log(`The current year is ${year}`);

/*
3.Explain the difference between var, let, and const in JavaScript.What happens if you
try to reassign values to variables declared with let or const?
    const stores data that cannot be changed after the variable is declared 
let is used to store constantly changing data  while var is used to store data that does not neccessarily change rapidly 
if you try to reassign values to variables declared with const it will bring an error while with let it will change the variable contents
*/