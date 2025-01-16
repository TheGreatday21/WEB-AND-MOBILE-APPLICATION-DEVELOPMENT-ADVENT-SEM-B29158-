console.log("Hey there my name is Elijah the Great .. welcome to my learning of java script in 2025");
//CRUD -Create Read Update Delete
                                    //Variables 
//Old way
var first_name = "Elijah";
//New way 
let firstName; //The let is an initialization and the variable name cannot be reused if you use thr old way of "var"
firstName = "John ";


let message ;
message= "Hey there iam the best ";
console.log(message);

//Variables with a constant variable we use const
//we use upper case for easy noting and distinct names 
const COLOR_GREEN = "green";
console.log(COLOR_GREEN);
/*
//The data types have two types 
i, primitive data types - These only contain fundamental values and can only contain one value 
    - String
    - Number
    - BigInt
    - Boolean
    - undefined
    - null
    - Symbol

ii, Reference data types - They are can contain more than one variable in it 
    - object
*/

        //Strings
let fav_fruit = 'watermelon';
let fav_ice_cream = "vanilla-chocolate";
let fav_language = `python`;

        //numbers
let pi = 3.14;
let  very_large_number = 23526986182411;

        //Boolean
let loves_coding = true;

        //Undefined
let fav_Color;
console.log(fav_Color);//will show undefined in the terminal when the code is run

        //null
let fav_girl = null;
console.log(fav_girl);

        //symbol
let unique_key = Symbol();
console.log(unique_key)

        //Object - They hold key value pairs .. we can have more than one variable in it
let course = {
    name:"java_script for beginners",
    hours:43
};

            ///OBJECTS
//They are technically nouns and use key value pairs like dictionaries kinda 

let school = {
    //key   //value
    name: "Viva College School",
    age : 20
};
console.log(school);//we can access the value of a given key using notations like:

//i) The dot notation 
console.log(`This is the dot notation, here is only the age of the school in the object which is  ${school.age}`);
// we can also re assign the values of a key in the object 
school.age = 30;

console.log(school);

//ii)Bracket notation
//- Here the key is denoted as a string in the brackets 
console.log(school["name"]);
school["name"] = "Viva College School Jinja";
console.log(school)



                        ////ARRAYS
// These can be created using [] and values can be got from bracket notation with the values index 

let colored = ['Green', 'Yellow', 'Blue'];
console.log(colored[0]);































