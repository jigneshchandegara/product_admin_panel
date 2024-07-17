let express = require("express");
const { upload } = require("../middlaware/multer");
const { productcontroller } = require("../controller");
let router = express.Router();

router.post("/create_product", upload.single('ProductImages'), productcontroller.Productadd);
router.get("/get_product_list", productcontroller.Productget);
router.delete("/delete_product/:id", productcontroller.Productdelete);
router.put("/updata_product/:id", productcontroller.Productupdata);


module.exports = router