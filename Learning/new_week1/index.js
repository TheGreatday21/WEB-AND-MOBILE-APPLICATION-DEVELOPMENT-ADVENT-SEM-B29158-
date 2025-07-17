//variables are containers for information of various data types 
//we declare variables using the let keyword and the const keyword for variables that cannot be changed 

//const -- variables that cannot be changed 
const christmas = "25.12.2025";
console.log(christmas);

//let -- normal variables in js
let age = 23; // integer
let name = 'keks'; //string
let male = true; //bool
let height = 189.4; //float or double(bigger float)

//object literal - lowkey feels like a dictionary on steriods cause it can take functions as key value pairs . has alot of key value pairs 
let course = {
    name : "Data science",
    period: 4,
    GPA: 4.9
};

console.log(course);
//we can get the specifics using dot notation like in a normal dict
console.log("This is the name of the course iam doing:",course.name);

//typecasting in javascript is called dynamically typing
let fName = 'James';
console.log(fName,"+",typeof fName);
fName = 100;
console.log(fName,"+",typeof fName);

//arrays are also the same here like in every programming language. arrays are a data structure that are reference based like objects 
let numbers = [3,2,1,4,56,5];
console.log(numbers[1]); //this gives me the number at the index 1 = 2
console.log(numbers.length); //this is to get the length of the array