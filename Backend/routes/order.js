// dependency imports
const {
	verifyToken,
	verifyTokenAndAuth,
	verifyTokenAndAdmin
} = require('../middleware/varifyToken');
const controller = require('../controllers/ordersController');
const router = require('express').Router();

//CREATE router
router.post('/', verifyToken, controller.createOrderController);

//UPDATE router
router.put('/:id', verifyTokenAndAdmin, controller.updateOrderController);

//DELETE router
router.delete('/:id', verifyTokenAndAdmin, controller.deleteOrderController);

//GET USER ORDERS router
router.get('/find/:userId', verifyTokenAndAuth, controller.getOrderByUserIdController);

//GET ALL router
router.get('/', verifyTokenAndAdmin, controller.getAllOrderIdController);

// GET MONTHLY INCOME router
router.get('/sales', verifyTokenAndAdmin, controller.salesController);

//export the Router
module.exports = router;
