/*
1.In African countries, mobile network providers
 offer different call rates. 
 Write a JavaScript program using a switch statement
  to print out the call rate based on the user's input 
  for a network code (e.g., MTN: 1, Airtel: 2, Africell: 3)
*/

let input_1 = 1;
let input_2= 2;
let input_3 = 3; 

let input = 3;

switch (input) {
    case input_1 :
        console.log("MTN");
        break;
    case input_2 :
        console.log("Airtle");
        break;
    case input_3:
        console.log("Africell");
        break;
    default:
        console.log("not a network");
}


