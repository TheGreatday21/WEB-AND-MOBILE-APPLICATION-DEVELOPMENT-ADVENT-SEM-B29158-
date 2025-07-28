//this is a calculator program 

//get the display element from the html file 
const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() {
    display.value = " ";
}
function calculate() {//this is for incase you do not complete the syntax we use a try and catch to catch the error so that the program doesnot crash 
    try {
         display.value = eval(display.value);
    //here we use the eval function which is like an inbuilt calculator    
    } catch (error) {
        display.value = "Error";
    }
   
}



















