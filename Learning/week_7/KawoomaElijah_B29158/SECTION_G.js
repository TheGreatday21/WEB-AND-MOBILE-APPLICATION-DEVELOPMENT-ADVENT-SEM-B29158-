/*
1.Write a function in JavaScript called
 calculateTax that accepts the income of
  a person in Nigeria and returns the tax payable 
  (assume a tax rate of 15%).
  */

  function calculateTax(){
    let income = 900000;
    let country  = "Nigeria";
    let tax = income * 0.15;
    console.log(`As a citizen from ${country} your tax for ${income} is  ${tax} `);
  }
  calculateTax();

/*
2.Create a simple function greetUser 
that accepts a user's name and prints "Welcome to Africa, [name]!" 
Test the function with three different names
*/
 
function greetUser(name){
    console.log(`Welcome to Africa ${name} !`);

}
greetUser("John");
greetUser("Elijah");
greetUser("Stacy");