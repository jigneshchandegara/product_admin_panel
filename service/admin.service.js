const { AdminSchema } = require("../model")

let postadmin = (body) => {
    return AdminSchema.create(body)
};
let duplicate = (email) => {
    return AdminSchema.findOne({ email });
};

let getadmin = () => {
    return AdminSchema.find()
}
let deleteadmin = (id) => {
    return AdminSchema.findByIdAndDelete({ _id: id });
};

let upadteadmin = (id, body) => {
    return AdminSchema.findByIdAndUpdate({ _id: id }, body);
};
let findbyname = (name) => {
    return AdminSchema.findOne({ name })
}
module.exports = { postadmin, getadmin, deleteadmin, upadteadmin, duplicate, findbyname }