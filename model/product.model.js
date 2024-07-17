let mongoose = require("mongoose");


let ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    ProductDescription: {
        type: String,
        required: true
    },
    ProductImages: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    ProductPrice: {
        type: Number,
        required: true
    },
    ProductQuantity: {
        type: Number,
        required: true
    },
    Ispublished: {
        type: Boolean,
        required: true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"AdminSchema",
    }
},
    {
        timestamps: true
    }
)

let product = mongoose.model("ProductSchema", ProductSchema);
module.exports = product;