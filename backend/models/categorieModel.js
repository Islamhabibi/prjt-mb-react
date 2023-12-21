const mongoose = require('mongoose')

//Categories schema
const categoriesSchema = new mongoose.Schema(
    {
        Name: {type: String, required:true,unique: true},
        Parent_Categorie:{type:String, default:'root'} ,
        Avatar: String,
        Description: String,
        Status: {type: Boolean,default: true}
    },
    {
        timestamps: true
    }
)

//categorie model
const Categorie = mongoose.model('Categorie',categoriesSchema)
module.exports= Categorie