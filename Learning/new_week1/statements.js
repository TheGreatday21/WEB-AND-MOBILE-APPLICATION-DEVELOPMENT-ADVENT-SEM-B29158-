//conditional statements including the if else statements 

let priceOfChoice = 1.99;
let hasAmount = 5;

const canBuyChoclate = hasAmount > priceOfChoice;

if (canBuyChoclate) {
    console.log("Enjoy your purchase ");
} else {
    console.log("you donot have enough money");
}
//if else statements are still the same as in c just a different way of outputing code with console.log and also comparing with the === instead of the usual ==

//js also has switch statements like in c

let grade = 'A';
switch (grade) {
    case 'A':
        console.log("Congrates you excelled in your studies ");
        break;
    case 'B':
        console.log("You can do even better than this ");
        break;
    default:
        console.log("Try harder next time");
        break;
}























