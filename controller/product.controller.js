const uploadImage = require("../middlaware/cloudinary");
const { productservice } = require("../service");

const Productadd = async (req, res) => {
    const body = req.body;
    const file = req.file;
    let img = await uploadImage(file.path);

    const newProduct = {
        ...body,
        ProductImages: img.url
    };

    try {
        const savedProduct = await productservice.postproduct(newProduct);
        res.status(201).json(
            {
                status: 201,
                message: "Product added successfully",
                data: savedProduct
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                status: 400,
                message: error.message
            }
        );
    }
};

let Productget = async (req, res) => {
    try {
        const products = await productservice.getproduct();
        res.status(200).json(
            {
                status: 200,
                message: "Products get successfully",
                data: products
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const Productdelete = async (req, res) => {
    try {
        const { id } = req.params;
        await productservice.deleteProduct(id);
        res.status(200).json(
            {
                status: 200,
                message: 'Product deleted successfully'
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                status: 400,
                message: error.message
            }
        );
    }
};

const Productupdata = async (req,res) => {
    try {
        const { id } = req.params;
        const body = req.body
        const updatedProduct = await productservice.updateProduct(id, body);
        res.status(200).json(
            {
                status: 200,
                message: "Product updated successfully",
                data: updatedProduct
            }
        );
    } catch (error) {
        res.status(400).json(
            {
                status: 400,
                message: error.message
            }
        );
    }
}

module.exports = { Productadd, Productget, Productdelete, Productupdata }