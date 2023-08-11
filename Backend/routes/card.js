// dependency imports
const router = require('express').Router();
const {
	verifyToken,
	verifyTokenAndAuth,
	verifyTokenAndAdmin
} = require('../middleware/varifyToken');
const controller = require('../controllers/cartsController');

//CREATE router
router.post('/', verifyToken, controller.createCardController);

//UPDATE router
router.put('/:id', verifyTokenAndAuth, controller.updateCardController);

//DELETE router
router.delete('/:id', verifyTokenAndAuth, controller.deleteCardController);

//GET USER CART router
router.get('/find/:userId', verifyTokenAndAuth, controller.getCardByUserIdController);

//GET ALL router
router.get('/', verifyTokenAndAdmin, controller.getAllCardsIdController);

//export the Router
module.exports = router;
