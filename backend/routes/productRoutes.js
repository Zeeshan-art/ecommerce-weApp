const express = require('express');
const {
    getAllProducts,
    createProduct,
    getProductDetail,
    updateProduct,
    deleteProduct,
} = require('../controllers/productController');

const router = express.Router();

//Routes

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").get(getProductDetail).delete(deleteProduct).put(updateProduct)

module.exports = router;