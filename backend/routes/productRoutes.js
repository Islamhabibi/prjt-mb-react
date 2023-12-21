var express = require('express')
const { productvalidation, validation } = require('../middleware/validation')
const { getProduct, AddProduct, DeletProduct, UpdateProduct, findProduct, deletProducts } = require('../controllers/productController')
 var productRoute = express.Router()
productRoute.get('/all',getProduct)
productRoute.get('/detailprod/:id',findProduct)
productRoute.post('/addproduct',productvalidation,validation,AddProduct)
productRoute.put('/updateprod/:id',validation,UpdateProduct)
productRoute.delete('/deleteprod/:id',DeletProduct)
productRoute.delete('/deletemanyprod',deletProducts)

module.exports = productRoute 