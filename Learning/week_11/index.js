/*
// easy way

let username;

username = window.prompt("Whats your user name?");

console.log(`Your username is ${username}`);
*/


// Harder way  - Using an HTML doc to output from our js file 
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent=(`WElCOME MY NIGGA ${username}`);
}














