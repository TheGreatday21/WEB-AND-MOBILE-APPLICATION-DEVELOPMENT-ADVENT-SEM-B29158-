//Objects help us to store related key value pairs together 
// FUNCTION IN OBJECT LITERALS IN  JS 

const dog = {
    name: "Max",
    breed: "German shepherd",
    age: 5,
    //we can also add our own function in this object 
    
    //A function within an Object is called a """""Method"""""
    eat: function () {//this is the 1st way we can add a function to an object literal 
        console.log("Champ");
    },
    bark(){//this is the second way we can add a function to an object literal 
        console.log("Woof woof ");
    }
}
//objects are used to record the state (properties) and behavior(methods / functions withhin the object ) 


const anotherdog = {//thiis makes it repetitive to add another dog so we use a function to ease this up 
    name: "Charlie",
    breed: "Dobaman finsha",
    age: 2,
    eat: function () {
        console.log("Champ");
    },
    bark(){
        console.log("Woof woof ");
    }
}

                //////USING FUNCTIONS TO RETURN AN OBJECT LITERAL
//THIS IS CALLED A FACTORY FUNCTION - it reduces the need to duplicate and repeat yourself 
//We specify what params we want to use here in the function  
function getDog(name,breed,age)
{
    return{
        name: name,//this is still duplication 
        //but in js if the key and value have the same nme we just use one name 
        breed,
        age,
        eat(){
            console.log("Champ");
        },
        bark(){
            console.log("Good job");
        }
    }
}

const anotherDog2 = getDog('Star','German shepherd',6);//we use one variable that accesses the function we created and just give it parameters we stated in the function 
console.log(anotherDog2);


//Factory functions provide an efficient way for us to create a new object . Reduces the neeed to copy and paste and duplication 
//we use camel case 






                        /////CONSTRUCTORY FUNCTION/////////////

//we use Pascal notation and the 'this' key word
//in this notation we start a naming with a capital letter only

function Dog(name,breed,age) {
    //this = {}
    this.name = this.name,
    this.breed = breed,
    this.age = age,
    this.eat = function () {
        console.log(this.name + ':Champ!');
    },
    this.bark =  function(){
        console.log(this.name + ':Woof!');
    }
    
}

//To use this type of function we have to use the key word """new""""
//the new keyword works best with constructor functions 
const dogHunt = new Dog('Policcee','Bull dog',9);
console.log(dogHunt);


                        ///OBJECTS IN JS ARE DYNAMIC

const person = {
    name: 'Steven'
};
            //*******We can add key value pairs in 2 ways 

//this is the first way to add a property 
person.favoriteFood = 'Ice cream';
console.log(person);

//this is the second way we can do it
person['favoriteSport'] = 'basketball';
console.log(person);

             //******We can delete key value pairs using the delete key word 
delete person.favoriteFood;
console.log(person);

            //*******We can also add methods 
person.play = function () {
    console.log("he plays the Guitar");
}

person.play();

                    //////ENUMERATING OVER THE PROPERTIES OF AN OBJECT

//Object is a built in property in java script and we can use it 
const theHive = {
    name: 'Queen Zelda',
    age: 23,
    role: "Queen in this b"
};

const keYs = Object.keys(theHive);//getting the keys in the object theHive
console.log(keYs);

const vaLues = Object.values(theHive);//getting the values in the object
console.log(vaLues);

const enTries = Object.entries(theHive);//getting the key value pairs in the object
console.log(enTries);
//each key value pair is placed as an element in an array 

 















































