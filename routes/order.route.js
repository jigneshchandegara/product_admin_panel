let express = require('express');
let router = express.Router();
let { ordercontroller } = require('../controller');

router.post('/addorder',ordercontroller.Orderadd);
router.get('/getorder', ordercontroller.getOrderList);
router.delete('/deleteorder/:id', ordercontroller.deleteOrder);
router.put('/updateorder/:id',ordercontroller.updateOrder );

module.exports = router;