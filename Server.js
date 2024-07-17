require("dotenv").config();
let http = require("http");
let express = require("express");
const DBconnect = require("./DB/DBconnect");
let app = express();
let router = require("./routes");
const cors = require('cors');
const cookieParser = require('cookie-parser');

app.use(cookieParser())
app.use(cors({ config: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//route
app.use('/v1', router);
//DBconnect
DBconnect()
//server
http.createServer(app).listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
})