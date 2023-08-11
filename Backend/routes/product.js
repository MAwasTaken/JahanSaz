// dependency imports
const { verifyTokenAndAdmin } = require('../middleware/varifyToken');
const uploader = require('../middleware/uploader');
const controller = require('../controllers/productsController');
const router = require('express').Router();

//CREATE router
router.post(
	'/',
	verifyTokenAndAdmin,
	uploader.array('images', 5),
	controller.createProductController
);

//UPDATE router
router.put(
	'/:id',
	verifyTokenAndAdmin,
	uploader.array('images', 5),
	controller.updateProductController
);

//DELETE router
router.delete('/:id', verifyTokenAndAdmin, controller.deleteProductController);

//GET PRODUCT BY ID router
router.get('/find/:id', controller.getProductByIdcontroller);

//GET ALL PRODUCTS router
router.get('/', controller.getAllProductcontroller);

// GET ALL Categories
router.get('/getCategories', controller.getAllCategoriesController);

//export the Router
module.exports = router;
