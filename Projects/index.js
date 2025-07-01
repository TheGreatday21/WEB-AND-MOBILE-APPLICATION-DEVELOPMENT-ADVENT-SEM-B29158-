//This is the brain of our backend 

//console.log("hello world , Iam Elijah");


//after installing express we can run the boiler plate code to test weteher its working 

const express = require('express');
const app = express();
const mongoose = require('mongoose');//the mongoose helps us to connect to mongo db
app.use(express.json());//this allows us to pass json to our scripts when writing inthe body in post commands 

//post is used to save to the database 
app.post('/api/products', (req,res) => {
    //console.log(req.body);//print out whatever the user is asking for in the console 
    //res.send(req.body); //the response is whatever is in the backend db
    
});



//we first ensure that our db is connected right before the server is running
//to access our db we use mongoose and a connection link from mongodb
mongoose.connect("mongodb+srv://kaizzielijah:jesuslove1..@crud.yow8vym.mongodb.net/CRUD?retryWrites=true&w=majority&appName=CRUD")
.then(() =>{
    console.log("Connected to the database");
    app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
})
.catch (() => {
    console.log("Connection failed");
});



//req is what the user sends in the browser and res is what the backend responds to the users input
app.get('/', (req,res)  => {
    res.send("Hello , from the backend \n we are glad to see you use the application to your content . ");
});





















