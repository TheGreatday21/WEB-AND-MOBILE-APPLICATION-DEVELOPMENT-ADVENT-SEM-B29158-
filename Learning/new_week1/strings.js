//these are the same like in c . an array of characters 

let name = 'Elijah';

//Functions related to strings 

const sentence = ' They were the first to see him in the clouds ';

            //slicing a string
const slicedString = sentence.slice(4,19); //slice(start,end)
console.log(slicedString);
            //starts with function 
const slicedStringPrime = sentence.startsWith('T'); //true because it does start with a t
console.log(slicedStringPrime);
            //ends with function 
const endsWith = sentence.endsWith('z'); //false because it does not end with a z 
console.log(endsWith);
            //includes function - checks to see if a string is in the sentence
const isIncluded = sentence.includes('first');
console.log(isIncluded);//because the function checks to see wether the given character/ string is ina given daheeV4 
            //replace function - takes two paramas and replaces one in the sentence
const replaceMe = sentence.replace('first','second'); //the replace(stringtobereplaced,stringtoreplace)
console.log(replaceMe);
            //trim function - removes the spaces at the end and beginnig of the string 
const trimmedSentence = sentence.trim();
console.log(trimmedSentence);
//we can also trim left(remove space at the beginning ) and trim right(space at the end )
            //split function - used to split the string whenever it encounters the parameter 
const wordsInSentence = sentence.split(' ');
console.log(wordsInSentence);//does this by creating an array to hold all the words seperated by the space 

            //the touppercase and tolowercase functions 
//toupper
let email = 'testMe@gmail.com';
let upperEmail = email.toUpperCase(); 
console.log(upperEmail);

//tolower
let email2 = 'testMe2@gmail.com';
let lowerEmail = email.toLowerCase(); 
console.log(lowerEmail);
































































