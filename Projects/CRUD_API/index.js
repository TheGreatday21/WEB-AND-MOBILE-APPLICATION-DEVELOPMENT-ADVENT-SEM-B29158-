//This is the brain of our backend 
//console.log("hello world , Iam Elijah");
//after installing express we can run the boiler plate code to test weteher its working 

const express = require('express');
const app = express();
const mongoose = require('mongoose');//the mongoose helps us to connect to mongo db
const Product = require('./models/product.model.js');//importing the Product function into our main file
const productRouter = require('./routes/product.route.js');//importing all the routes from the router file and using a const to access all of them 
//MIDDLE WARE
app.use(express.json());//this allows us to pass json to our scripts when writing inthe body in post commands 
app.use(express.urlencoded({extended: false}));//this enables us to add products using forms 

//ROUTES
app.use('/api/products', productRouter);



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

/*
//req is what the user sends in the browser and res is what the backend responds to the users input
app.get('/', (req,res)  => {
    res.send("Hello , from the backend \n we are glad to see you use the application to your content . ");
});



                            ///////////   CRUD - Create Read Update Delete  ///////////// (with mongodb)

//CREATING AN ENTRY IN OUR DATABASE
//post is used to save to the database 
app.post('/api/products', async(req,res) => {//async is needed to keep it seemless as possible
    //console.log(req.body);//print out whatever the user is asking for in the console 
    //res.send(req.body); //the response is whatever is in the backend db
    try {//we use a try and catch to save to our mongo db
        const proDuct = await Product.create(req.body);
        res.status(200).json(proDuct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


//READING THE ENTRIES IN OUR DATABASE
//creating an API to help us see what we are posting in our db Using the try and catch functions
app.get('/api/products' , async (req,res) =>{
    try {
       const proDucts = await Product.find({});
       res.status(200).json(proDucts);
    } catch (error) {
        res.status(500).json({message: erro.message});
    }
})

//creating to get a product according to its id 
app.get('/api/products/:id' , async (req,res) =>{
    try {
        //getting the ids from the URL. On our browser we can use a json reader extension 
        //we use params 
        const { id } = req.params;
        const proDuct =  await Product.findById(id);
        res.status(200).json(proDuct);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});



//UPDATING A PRODUCT IN OUR DATABASE
//here we use the put function 
app.put('/api/products/:id' ,async(req,res) =>{
    try {
        const { id } = req.params;
        const proDuct = await Product.findByIdAndUpdate(id, req.body);//we find the product and ask the user for the new product information 

        if (!proDuct) {
            return res.status(404).json({message:"Product not found"});   
        }
    //after updating the product we  find it by  id and print it out from the server side with the res method
    const updatedProDuct = await Product.findById(id);
    res.status(200).json(updatedProDuct);


    } catch (error) {
        res.status(500).json({message:error.message});
    }
});


//DELETING A PRODUCT IN OUR DATABASE
app.delete('/api/products/:id' , async(req,res) =>{
    try {
        const { id } = req.params;
        const productDelete = await Product.findByIdAndDelete(id);

        if (!productDelete) {
            return res.status(404).json({message:"Product not found"});   
        }

        res.status(200).json({message: "Product deleted successfully"});

    } catch (error) {
        res.status(500).json({messsage:error.message});
    }
})

                    ////Over crowding the index file is not good practice so we have to create specific files to handle specific tasks. This is called a RESTFUL API

*/


















