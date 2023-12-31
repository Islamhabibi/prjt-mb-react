var express = require('express')
const { getCategories, Addcategorie, UpdateCategorie, DeleteCategorie, DeleteManyCategories, getCategorie, getCategoriebyName } = require('../controllers/categorieController')
const { categorievalidation, validation } = require('../middleware/validation')
var categorieRoute = express.Router()
categorieRoute.get('/all',getCategories)
categorieRoute.get('/detailcatg/:id',getCategorie)
categorieRoute.get('/catgbyName/:name',getCategoriebyName)
categorieRoute.post('/addcategorie',categorievalidation,validation,Addcategorie)
categorieRoute.put('/updatecatg/:id',validation,UpdateCategorie)
categorieRoute.delete('/deletecatg/:id',DeleteCategorie)
categorieRoute.delete('/deletemanycatg',DeleteManyCategories)

module.exports = categorieRoute 