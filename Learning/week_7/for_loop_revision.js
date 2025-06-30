/*
//FOR LOOPS
//SYNTAX
for(iteration;condition;increament){ //iteration is like our variable , conditions to apply to the iteration and we need to increase our iterate every cycle 
    othercondition;
}


for (let x=0; x<=6;x++){
    console.log(`X-${x}`);
}
*/
//////SCENARIO 1///////USING AN IF STATEMENT///
for (let x = 0; x < 6; x++){
    if(x%2 == 0){
        console.log(`X-${x}`);
    }   
}
///////SCENARIO 2///JUST CHANGING THE INCREAMENT///
for (let x = 0; x < 6; x = x+2){
      console.log(`X-${x}`);   
}