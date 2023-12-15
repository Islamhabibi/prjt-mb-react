const mongoose = require('mongoose')

//Categories schema
const categoriesSchema = new mongoose.Schema(
    {
        Title: {type: String, required:true},
        Slug: String,
        Parent_Categorie: String,
        Image_Categorie: String,
        Description: String,
        Status: {
            type: String,
            enum: [ 'published', 'inactive'],
            required: false,
            default: 'inactive'
         }
    },
    {
        timestamps: true
    }
)

//categorie model
const Categorie = mongoose.model('Categorie',categoriesSchema)
module.exports= Categorie