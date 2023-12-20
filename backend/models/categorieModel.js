const mongoose = require('mongoose')

//Categories schema
const categoriesSchema = new mongoose.Schema(
    {
        Name: {type: String, required:true,unique: true},
        Parent_Categorie: String,
        Avatar: String,
        Description: String,
        Status: {
            type: String,
            enum: [ 'published', 'inactive'],
            required: false,
            default: 'published'
         }
    },
    {
        timestamps: true
    }
)

//categorie model
const Categorie = mongoose.model('Categorie',categoriesSchema)
module.exports= Categorie