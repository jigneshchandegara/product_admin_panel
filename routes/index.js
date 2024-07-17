let express = require("express");
let router = express();
let adminroute = require("./admin.route");
let productroute = require("./product.route");
let orderroute = require("./order.route");




router.use("/admin", adminroute);
router.use("/product", productroute);
router.use("/order", orderroute);

module.exports = router
