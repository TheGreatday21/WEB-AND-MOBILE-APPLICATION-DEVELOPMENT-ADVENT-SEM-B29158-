//implement a fuunction that accepts two numbers and retuurns the maximum number 

let a,b;

function maxNum(a,b)
{
    let c = (a > b) && (a!=b) ? a : b;
    return c;
}

console.log(maxNum(4,6));


//implement a function to accept a number the return FizzBuzz if divisible by 3 and 5
//or return Fizz if only divisible by 3 or return Buzz iif only divisible by 5 or return the original number if not divisible by 3 or 5

let num;
function FizzBuzz(num) {
    if ((num % 3 === 0) && (num % 5=== 0)) {
        console.log("FizzBuzz");
    } else if((num % 3 === 0) && (num % 5 != 0)) {
        console.log("Fizz");
    }else if ((num % 3 != 0) && (num % 5 === 0)) {
        console.log("Buzz");
    }else{
        console.log(num);
    }
}

FizzBuzz(30);

//implement a function that takes in an array as a param and iterate through it to determine the even and odd numbers in the array 

let ara = [4,6,2,1,7,9,0];
//since its an array we can use the for of loop to iterate through it effectively 
function evenOdd(ara) {
    for(const element of ara)
        {
            if (element % 2 === 0) {
                console.log("Even num",element);
            } else {
                console.log("Odd num",element);
            }
        }   
}

evenOdd(ara);












