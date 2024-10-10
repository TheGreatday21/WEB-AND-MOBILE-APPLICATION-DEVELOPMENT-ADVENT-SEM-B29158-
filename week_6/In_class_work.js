/* 1 . Explain the difference between var, let, and const in java script*/
/*  - var is a a key word used for declaring variables in java script 
    - let is a key word used to declare a local variable in java script 
    - const is a key word used to declare a constant variable ie a variable that cannot be reassigned  in java script 
2. What happens if you try to reassign values of variables declared with let or const?
    - With let the variable can be reassigned but with const the variable cannot be reassigned 

3. What will be the output of the following code? Explain your answer*/
/*
var x = 10;
let y =5;
const z = 3;

x = 20;
y = 87;
z = 7;
console.log(x,y,z);
*/
/*Why does the code behave this way?
- The code behaves this way because the const variable cannot be reassigned*/



/*
DATA SCIENCE SHORT QUIZ
In a data science project you are tasked with tracking daily rainfall in different districts of Uganda.
How would you declare a variable to store the rainfall amount using java script. What would be the best type of variable(var , let,or const) and why

    - The best type to use would be var because the var keyword declares a  variable once that can constantly be re-declaring it unlike let that can has to be re-assigned every time your changing the same variable

INFORMATION TECHNOLOGY
Write a simple javascript program that declares a variable to store the name of a student and a constant for the total number of students in an IT class.Then display them using console.log

var name = "Kaizzi Elijah";
const student = 34;
console.log(`There are ${student} students in the class and one of them is ${name}`)/*we use these weird `` when using the js f string equivalent
*/

/*/////Explain the syntax of an if statement in javascript.//////// What is the purpose of using if statements in a program
Its syntax is: - 

if (condition 1){
condition 2
}
If statements help when fulfilling a given condition of true or false where the if statement is for the true value

/////Given the following code what will be the output and why? */
/*
let temperature = 30;

if (temperature >25){
    console.log("It's hot!");
}

else{
    console.log("Its cold!");
}
//The output would be "its hot!"
//How would you modify the program to print a message for temperatures between 15 and 25 degrees///

temperature = 89;

if (temperature <=15){
    console.log("It's cold!");
}

else if(temperature  <= 25){
    console.log("Its normal!");
}
else{
    console.log("Damn its hot!");
}


//&& is the logical AND  statement in java script//
/*
TRUE && TRUE = TRUE
FALSE && TRUE = FALSE
FALSE && FALSE = FALSE
*/

// || is the logical OR  statement in java script//
/*
TRU || TRUE = TRUE
FALSE || TRUE = TRUE
FALSE || FALSE = FALSE


var email = "Kaizzelijah@gmail.com";
var phone ="0774636422";
var password = "1234";

if (email == "Kaizzielijah@gmail.com" || phone == "0774636422" && password == "1234"){
    console.log("You are logged in");
}
else{
    console.log("You are not logged in");
}


/////NESTED IF STATEMENTS //////
//concider the code snippet below

let age = 18;
if (age >=18){
    if (age< 65){
        console.log("You are eligible to work");
    }
    else{
        console.log("You are of retirement age");
    }
}
else{
    console.log("You are too young to work");
}

*/

//Rewrite the code using  a sing of-else statement without nesting
age = 2;

if (age >= 65){
    console.log("You are too old to work");
}
else if(age >= 18){
    console.log("You are eligible to work");
}
else{
    console.log("You are too young to work");
}













