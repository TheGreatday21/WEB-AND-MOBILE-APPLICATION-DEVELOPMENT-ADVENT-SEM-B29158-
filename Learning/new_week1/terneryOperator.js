let age = 9;
//the question mark is the tenery operator 
const canDrive = age >= 16 ? true  : false;
//this means if the first statement is true and returns false if the statement is false 
console.log(canDrive);
//example
let points = 110;
const customerType =  points > 100 ? 'gold' : 'silver'; //if true return gold if false return silver 
console.log(customerType);


//There are 4 logical operators in js 
//these operators are the 
// ||- or operator 
// && - and operator 
// ! - not operator 
// ?? - null coalescing operator 

//////////////////// || (or operator ) //as long as one of the operands is true it will return true 
//read from left to right 
console.log(true || true);//true
console.log(true || false); //true 
console.log(false || true);//true 
console.log(false || false); //false 



/////////////////// && (and operator) //both the args have to be true 
//reads from left to right 
console.log(true && true);//true
console.log(true && false); //false 
console.log(false && true);//false
console.log(false && false); //false



                    /// && is evaluated first before the || operator 


////////////////// ! (not operator )
//returns the inverse of the operand given
console.log( !true);//false
console.log(!false); //true 


////////////////// ?? (null coelescing operator)
let a = null;
const result = a ?? false; //this is giving it a diffault value 
//this is rather a shorter form of the expression 
const result1 = (a !== null && a !== undefined) ? a : false;

console.log(result,result1);


///////////////// [logical operators with non boolean values]
let userChoice = 'blue';
let defaultColor = 'green';
const currentcolor = userChoice || defaultColor;

console.log(currentcolor);//true or false will choose true hence blue is the output but if the value of the userChoice was either null,'',NaN,emptystring it would consider it to be a false value and return false hence the answer will be green 






























