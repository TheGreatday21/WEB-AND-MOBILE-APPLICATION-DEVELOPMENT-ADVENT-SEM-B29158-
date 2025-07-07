// FUNCTION IN OBJECT LITERALS IN  JS 

const dog = {
    name: "Max",
    breed: "German shepherd",
    age: 5,
    //we can also add our own function in this obj 
    
    //A function within an Object is called a """""Method"""""
    eat: function () {
        console.log("Champ");
    },
    bark(){
        console.log("Woof woof ");
    }
}
//objects are used to record the state (properties) and behavior(methods / functions withhin the object ) 


const anotherdog = {
    name: "Charlie",
    breed: "German shepherd",
    age: 5,
    eat: function () {
        console.log("Champ");
    },
    bark(){
        console.log("Woof woof ");
    }
}

                //////USING FUNCTIONS TO RETURN AN OBJECT LITERAL

//you specify the params you want to copy 
function getDog(name,breed,age)
{


}












