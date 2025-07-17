//we just initialise the function by using the function key word 

//function without args 
function helloo() {
    console.log("heyy there iam Mohaveee");
};
helloo();

//function with arguments
let name; //we dont need to declare the variabel here anyway 
function helloPrime(name) {
    console.log("Hello ",name);
};

helloPrime("Elijah");


//function with more than one arg 
function add(num2,num1) {
    num3 = num1 + num2;
    console.log("Your answer is ",num3);
};
add(34,10);


//there are 2 ways to compare values in js 


//truthy comparison 
let a = 2;
let b = '2';

console.log(a == b); //this will give us true cause they technically look the same. This is referred to as """"""loose equality"""""""""

console.log(a === b);//this is referred to as """"" strict equality""""" only returns true if the values are the same and the same data type



















