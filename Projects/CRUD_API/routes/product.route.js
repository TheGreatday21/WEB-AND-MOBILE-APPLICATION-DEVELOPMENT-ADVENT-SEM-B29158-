//we place all the routes leading to the product placed here 
const express = require("express");
const router = express.Router();
const Product = require('../models/product.model.js');
//const productController = require('../controllers/product.controller.js');//this is another way to do it 
const {getProducts,getSingleProduct,addProduct,updateProduct, deleteProduct} = require('../controllers/product.controller.js');//calling the function directly from its directory if you exported it 

//READING PRODUCTS
router.get('/',getProducts);
router.get('/:id', getSingleProduct);

//CREATING A PRODUCT
router.post('/', addProduct);

//UPDATING A PRODUCT
router.put('/:id',updateProduct);

//DELETING A PRODUCT 
router.delete("/:id", deleteProduct);





module.exports = router;