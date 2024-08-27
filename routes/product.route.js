const express = require("express");
const router = express.Router();
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} = require('../controller/product.controller');



router.get('/',getProducts)
router.post('/',createProduct)
router.get('/:id',getProduct)
router.put('/:id',updateProduct)
router.delete('/:id',deleteProduct)

module.exports = router;