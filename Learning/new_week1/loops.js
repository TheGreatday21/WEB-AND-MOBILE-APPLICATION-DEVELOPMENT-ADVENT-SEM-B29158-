//loops are technically the same as in C programming 

//this is for loop

let numbers = [1,2,3,4,5,6,7,8];
let lengthArray = numbers.length;//this function helps get the length of the array 

for (let i = 0; i < lengthArray; i++) {
    console.log(numbers[i]);//printing the numbers at the various indexes in the array 
}


//this is a while loop 

let n = 0;//initialising a variable to help us track the iterations 
while (n  < lengthArray) {
    console.log(numbers[n]);
    n++;//increasing the variable on every iteration 
}

//this is a do while loop like in c 

let z = 0;
do {
    console.log("Your number is ",numbers[z]);
    z++;
    if (z === lengthArray) {
        break;
    }
} while (true);



//USING FOR LOOPS TO ITERATE OVER JS OBJECTS 

let course = {//tthis is a js object
    name: "Js for beginners",
    duration: 3,
    section: 7
};

console.log(course.name);
console.log(course['duration']);
console.log(course.section);

                    /////// FOR IN loop ///////
//using the for in loop we iterate over the keys  in the js object 
//this reduces our codes duplication 
        ////IT IS ONLY USED FOR -------java script objects-------  #dicts
for (const key in course) { 
    console.log(course[key]);
}

                    /////  FOR OF loop  /////
//it reduces the number of times we iterate in our for loop 
 ///IT IS ONLY USED FOR ----arrays---------
let ages = [12,2,35,43,19,20];

for (const element of ages) {
    console.log(element);//printing out just the elements int the array
}


                /////BREAK STATEMENTS
//once a condition is met the break statement stops the loop from continuing 
for (let i = 0; i < 10; i++) {
    console.log(i);

    if (i === 5) {
        break;
    }
    
}

            ///// CONTINUE STATEMENTS 
//This jumps a step according to a given condition like in this case whenever it sees an even number it just contnues the code to the console.log statement 

const arr = [1,2,3,4,5,6,7,8];

for (const element of arr) {
    if (element % 2 === 0) { //if the element in the array is even number just continue 
        continue;        
    }
    console.log("This number is odd: ",element);//print out the non even numbers every time you continue 
}

























































