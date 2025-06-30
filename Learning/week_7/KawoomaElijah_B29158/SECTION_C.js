/*
1.In a market, a vendor in Kampala gives a discount if the total price of products 
exceeds 100,000 UGX. Write a JavaScript program that stores the
 prices of three products and calculates their total. 
 Use an if statement to determine if the discount is applicable. 
*/
let plates = 30000;
let microwave = 45000;
let cooker = 50000;
let total_price = plates + microwave + cooker;

console.log(`Your total price is ${total_price}`);

if (total_price > 100000){
    console.log("You are eligible for a discount");
}else{
    console.log("You are not eligible for a discount");
}

/*
2.A student needs to choose an 
elective course based on their UACE results. 
Write a JavaScript program that stores the students UACE 
points and prints "Eligible for BSIT and Data Science" if 
the points are greater than or equal to 7, otherwise prints "Choose Social Science."
*/
let UACE = 17;

function  COURSE(){
    if (UACE >= 7){
        console.log("Eligible for BSIT and Data Science");
    }else{
        console.log("Choose Social Science.");
    }
}
COURSE()




















