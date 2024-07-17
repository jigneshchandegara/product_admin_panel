const { orderservice } = require("../service");

const Orderadd = async (req, res) => {
    try {
        const order = await orderservice.addOrder(req.body);
        res.status(201).json(
            {
                status: 'success',
                data: order
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
};

const getOrderList = async (req, res) => {
    try {
        const orders = await orderservice.getOrderList();
        res.status(200).json(
            {
                status: 'success',
                data: orders
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
};

const deleteOrder = async (req, res) => {
    try {
        await orderservice.deleteOrder(req.params.id);
        res.status(204).json(
            {
                status: 'success',
                data: null
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
};


const updateOrder = async (req, res) => {
    try {
        const order = await orderservice.updateOrder(req.params.id, req.body);
        res.status(200).json(
            {
                status: 'success',
                data: order
            }
        );
    } catch (error) {
        res.status(500).json({ message: error.message, error });
    }
};

module.exports = { Orderadd, getOrderList, deleteOrder, updateOrder }