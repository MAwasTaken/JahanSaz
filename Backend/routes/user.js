// dependency imports
const router = require('express').Router();
const { verifyTokenAndAuth, verifyTokenAndAdmin } = require('../middleware/varifyToken');
const controller = require('../controllers/usersController');

//UPDATE router
router.put('/:id', verifyTokenAndAuth, controller.updateUserController);

//DELETE router
router.delete('/:id', verifyTokenAndAuth, controller.deleteUserController);

//GET USER router
router.get('/find/:id', verifyTokenAndAdmin, controller.getUserByIdController);

//GET ALL USER router
router.get('/', verifyTokenAndAdmin, controller.getAllUsersController);

//export the Router
module.exports = router;
