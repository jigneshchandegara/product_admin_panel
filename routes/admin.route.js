let express = require("express");
const { admincontroller } = require("../controller");
const { upload } = require("../middlaware/multer");
let router = express.Router();

router.post("/create_admin", upload.single('profileimage'), admincontroller.admincreate);
router.get("/get_admin_list", admincontroller.adminget);
router.delete("/delete_admin/:id", admincontroller.admindelete);
router.put("/updata_admin/:id", admincontroller.adminupdata);
//login
router.post("/admin_login", admincontroller.loginadmin);

module.exports = router