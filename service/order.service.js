const { OrderSchema } = require("../model");

let addOrder = (orderData) => {
    return OrderSchema.create(orderData);
};

let getOrderList = () => {
    return OrderSchema.find().populate([
        {
            path: 'items.productId',
            select: '_id customername price'
        }, {
            path: 'customername',
            select: 'email'
        }
    ]);
};

let deleteOrder = (orderId) => {
    return OrderSchema.findByIdAndDelete({ _id: orderId });
};

let updateOrder = (orderId, orderData) => {
    return OrderSchema.findByIdAndUpdate({ _id: orderId }, orderData, { new: true });
};

module.exports = { addOrder, getOrderList, deleteOrder, updateOrder }