let mongoose = require("mongoose");

let AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profileimage: {
        type: String,
        required: true
    },
    mobileno: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "customer"],
        default: "admin",
    }
},
    {
        timestamps: true
    }
)

let admin = mongoose.model("AdminSchema", AdminSchema)
module.exports = admin;