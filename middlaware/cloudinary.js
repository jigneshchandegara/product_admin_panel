const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'daa7nxucz',
    api_key: '483774672511427',
    api_secret: 'c39nrhmtQNE87JNNIxBG9M29Tfg'
});


let uploadImage = (path) => {
    return cloudinary.uploader.upload(path,
        { public_id: "blog image" },
        function (error, result) { return result });
}

module.exports = uploadImage