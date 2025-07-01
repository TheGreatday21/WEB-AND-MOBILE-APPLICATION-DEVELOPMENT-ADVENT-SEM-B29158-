const mongoose = require('mogoose');
const { timeStamp } = require('node:console');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required :[true, "Please enter product name"],
        },

        quantity: {
            type :Number,
            required: true,
            default: 0
        },

        price: {
            type:Number,
            required: true,
            default: 0
        },
    },
    {
        timestamps: true,
    }
);

//to allow mongo use our model 

const Product = mongoose.model("Product",ProductSchema);

module.exports(Product);