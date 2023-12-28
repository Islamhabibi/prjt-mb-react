var express = require('express')
const { productvalidation, validation } = require('../middleware/validation')
const {  AddProduct, DeletProduct, UpdateProduct, findProduct, deletProducts, getProduct, getProductCateg } = require('../controllers/productController')
 var productRoute = express.Router()
productRoute.get('/all',getProduct)
productRoute.get('/detailprod/:id',findProduct)
productRoute.post('/addproduct',productvalidation,validation,AddProduct)
productRoute.put('/updateprod/:id',productvalidation,validation,UpdateProduct)
productRoute.delete('/deleteprod/:id',DeletProduct)
productRoute.delete('/deletemanyprod',deletProducts)
productRoute.get('/prodcatg/:name',getProductCateg)

module.exports = productRoute 