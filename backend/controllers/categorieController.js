const categories = require('../models/categorieModel')
const {mongoose} = require('mongoose') 
/**
 * @route GET /categories/all
 * @desc Get categories data
 * @access Private
 */
exports.getCategories = async (req,res)=>
{
    try {
        const AllCategories = await categories.find()
            res.status(200)
            .send({message:'List of categories',AllCategories})
    } catch (error) {
        res.status(500)
        .send({message:'Erreur'})
    }
}
/**
 * @route GET /categorie
 * @desc Get categorie data
 * @access Private
 */
exports.getCategorie = async (req,res)=>
{
    try {
        const OneCategorie = await categories.findById(req.params.id)
        if(!OneCategorie)
        {
            return res.status(404).send({ message: 'Categorie not found' });
        }
            res.status(200)
            .send({message:'Data of Categorie',OneCategorie})
    } catch (error) {
        res.status(500)
        .send({message:'Erreur'})
    }
}
/**
 * @route GET /categorie
 * @desc Get categorie by name data
 * @access Private
 */
exports.getCategoriebyName = async (req,res)=>
{
    try {
        const OneCategorie = await categories.findOne({Name})
        if(!OneCategorie)
        {
            return res.status(404).send({ message: 'Categorie not found' });
        }
            res.status(200)
            .send({message:'Data of Categorie',OneCategorie})
    } catch (error) {
        res.status(500)
        .send({message:'Erreur'})
    }
}

/**
 * @route POST /categories/categorie
 * @desc Add new categorie
 * @access Public
 */
exports.Addcategorie = async(req,res)=>
{   const {Name}= req.body
    // Check if categorie exists
    const categorieExists = await categories.findOne({Name})
    if (categorieExists){
        res.status(400)
        .send({message:"Categorie already exits ",categorieExists}) 
        //throw new Error ('Categorie already exits')
    }
    //create categorie
    const categorie= await categories.create(req.body)
    if(categorie){
        res.status(200).json({
            _id: categorie.id,
            Name: categorie.Name,
            Parent_Categorie: categorie.Parent_Categorie,
            Image_Categorie: categorie.Image_Categorie,
            Description: categorie.Description,
            Status: categorie.Status
        })
    }else{
        res.status(400)
        throw new Error ('Invalid categorie data')
    }
}
/**
 * @route PUT /categories/updatecatg
 * @desc Add new categorie
 * @access Public
 */

exports.UpdateCategorie = async (req,res)=>
{ 
    try {
        const categorieUpdate = await categories 
            .findByIdAndUpdate(req.params.id,{$set:req.body})
            res.status(200)
            .send({message:"Modified category ",categorieUpdate})     
            //console.log(req.params.id)
    } catch (error) {
        res.status(400)
        throw new Error ('Error in edit category ')
    }
}
/**
 * @route DELETE /categories/deletecatg
 * @desc Delete   categorie
 * @access Public
 */
exports.DeleteCategorie = async (req,res)=>
{
    try {
        const categorieDelete = await categories
        .findByIdAndDelete(req.params.id)
        res.status(200)
        .send({message:"Category delete",categorieDelete})
    } catch (error) {
        res.status(400)
        throw new Error ('Error in edit category ')
    }
}

/**
 * @route DELETE /categories/deletemanycatg
 * @desc Delete many categorie
 * @access Public
 */
exports.DeleteManyCategories = async (req,res) => 
{
    const {dataid} = req.body
    try {
        const categorie = await categories
        .deleteMany({_id:{$in:dataid}})
        res.status(200)
        .send({message:"Categorys delete",categorie})
    } catch (error) {
        res.status(400)
        .send({message:"Category delete",categorie})
        //throw new Error ('Error in delete many category ')
    }
}