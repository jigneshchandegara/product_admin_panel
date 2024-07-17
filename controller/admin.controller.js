const { createtoken } = require("../middlaware/auth");
const uploadImage = require("../middlaware/cloudinary");
const { adminservice } = require("../service");

let admincreate = async (req, res) => {
    try {
        let body = req.body;
        let file = req.file;

        let duplicateUser = await adminservice.duplicate(body.email)
        if (duplicateUser) {
            throw new Error("User already exists")
        }

        let img = await uploadImage(file.path);
        let finalData = {
            ...body,
            profileimage: img.url
        }

        let result = await adminservice.postadmin(finalData);
        res.status(201).json({
            status: "user created successfully",
            data: result,
        });


    } catch (error) {
        res.status(500).json({
            status: "Failed to create user",
            error: error.message,
        });
    }
}

let adminget = async (req, res) => {
    try {
        let admin = await adminservice.getadmin();
        res.status(200).json({
            message: "Admin get successfully",
            data: admin
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

let admindelete = async (req, res) => {
    try {
        let { id } = req.params;
        let result = await adminservice.deleteadmin(id);

        if (!result) {
            throw new Error("User not found");
        }
        res.status(200).json({
            message: "User deleted successfully",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

let adminupdata = async (req, res) => {
    try {
        let body = req.body;
        let { id } = req.params;

        let result = await adminservice.upadteadmin(id, body);
        if (!result) {
            throw new Error("User not found");
        }
        res.status(200).json({
            message: "Product updated successfully",
            data: body,
            oldData: result,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

let loginadmin = async (req, res) => {
    try {
        let { name, password } = req.body;
    console.log(name);
        let result = await adminservice.findbyname(name);
        console.log(result);

        if (!result) {
            throw new Error("Admin not found")
        }
        if (result.password !== password) {
            throw new Error("password invalid");
        }

        let token = createtoken({ result })
        res.cookie("token", token);
        res.status(200).json({ message: "login success" });
    } catch (error) {
        res.status(500).json({
            message: "something went wrong in admin login",
            error: error.message
        })

    }
};

module.exports = { admincreate, adminget, admindelete, adminupdata, loginadmin }