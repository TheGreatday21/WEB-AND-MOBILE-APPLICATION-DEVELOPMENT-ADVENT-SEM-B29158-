//How do we organise our code

////////////////SWITCH STATEMENT /////////
/* SYNTAX

let variablenamehere = "variablevalue";
switch(variablenamehere){

    case conditiontobemet: //These are almost equivalent to if statements and else if statements
        console.log("text");    
        break; //These end the code block  
    
    case conditiontobemet:
        console.log("text");
        break;
    
    default : //Equivalent of else statement 
        console.log("text");
        
}


//////NOTE....In switch statements we cannot get ranges like IF statements ...ie they work with specific values///*/

let salary  = 0;
switch(salary){
    case salary = 1000:
        console.log("Thats too low for a salary ")
        break;
    case salary = 0:
        console.log("You cannot have a zero salary ");
        break;
    case salary  = 100000:
        console.log("You have a nice pay");
        break;
    default:
        console.log("SOORYYY");
}












