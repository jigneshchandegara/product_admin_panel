let mongoose = require("mongoose");

let OrderSchema = new mongoose.Schema({
    customername: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AdminSchema",
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ProductSchema",
                // required: true
            },
            quantity: {
                type: Number,
                required: true,
                default: 1
            }
        }
    ],
    payment: {
        type: String,
        enum: ['Cash', 'Credit ', 'Card'],
        default: 'Cash'
    }
},
    { timestamps :true }
);

let order = mongoose.model("OrderSchema ", OrderSchema);
module.exports = order;