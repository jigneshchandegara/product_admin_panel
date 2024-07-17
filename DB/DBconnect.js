let mongoose = require("mongoose");


let DBconnect = () => {
    mongoose.connect(process.env.Db_URL).then(() => {
        console.log("Database Connected successfully");
    }).catch((error) => {
        console.log(`Database Connection Failed ${error}`);
    })
}

module.exports = DBconnect