/*
1.How do the logical operators (&&, ||, !) work in conjunction with if statements in java script?

    The && in an if statement is used when both conditions have to be fulfilled . It acts as a logical AND
    The || in an if statement is used when it can run any of the two conditions given. It acts as a logical OR 
    The ! is used in an if statement when a condition is not true. it acts as a logical NOT 
    
2. Write an example where you check if  person is eligible to vote in Uganda (must be Ugandan citizen and at least 18years old )

function voters(){
    let citizen = "Ugandan";
    if (citizen != "Ugandan"){
        console.log(`sorry,Voting is only allowed for ${citizen} at the moment`);
    }
    else{
        var age = 9;
        if (age >= 18){
            console.log(`You are eligible to vote dear ${citizen}`);
        }
        else{
            console.log(`You are not old enough to vote dear ${citizen}`);
        }
    }
}
voters();


//3.What will be the result of this code and how can you simplify it using a switch statement?

let score =80;
if(score >90 && score <= 100){
console.log("A grade");
}else if (score >75 && score <= 90){
console.log("B grade")
}else if (score >=50 && score <= 75){
console.log("C grade")
}else{
console.log("Fail")
}
//The output of this code will be B grade 

//To modify the code we will have to use the switch statements 
//-------------------SWITCH STATEMENTS------------------//
let score =90;
switch(score){
    case (90):
        console.log("A grade");
        break;
    case (75 ):
        console.log("B grade");
        break;
    case (50):
        console.log("C grade")
    default:
        console.log("Fail")
}
*/