const { ProductSchema } = require("../model");

let postproduct = (body) => {
    return ProductSchema.create(body);
};
let getproduct = () => {
    return ProductSchema.find()
};

let deleteProduct = (id) => {
    return ProductSchema.findByIdAndDelete({ _id: id });
};

let updateProduct = (id, body) => {
    return ProductSchema.findByIdAndUpdate({ _id: id }, body, { new: true });
};

module.exports = { postproduct, getproduct, deleteProduct, updateProduct }
