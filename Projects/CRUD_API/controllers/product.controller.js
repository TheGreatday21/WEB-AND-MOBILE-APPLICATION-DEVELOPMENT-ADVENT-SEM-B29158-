const Product = require('../models/product.model.js');

//Function to get the products in the database
const getProducts = async(req,res) =>{
    try {
       const proDucts = await Product.find({});
       res.status(200).json(proDucts);
    } catch (error) {
        res.status(500).json({message: erro.message});
    }
};

const getSingleProduct = async(req,res) =>{
    try {
        const { id } = req.params;
        const proDuct =  await Product.findById(id);
        res.status(200).json(proDuct);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};


//Functions to add a product 

const addProduct  = async(req,res) =>{
    try {
        const proDuct = await Product.create(req.body);
        res.status(200).json(proDuct);

    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

//Function to update a product
const updateProduct  = async(req,res) =>{
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
};

//Function to delete a product
const deleteProduct = async(req,res) =>{
    try {
        const { id } = req.params;
        const productDelete = await Product.findByIdAndDelete(id);

        if (!productDelete) {
            return res.status(404).json({message:"Product not found"});   
        }

        res.status(200).json({message: "Product deleted successfully"});
    }
    catch (error) {
        res.status(500).json({messsage:error.message});
    }
};




module.exports = {getProducts,getSingleProduct,addProduct,updateProduct,deleteProduct}