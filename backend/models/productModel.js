const mongoose = require('mongoose')
//team schema
const userSchema = new mongoose.Schema(
    {
        Name: {type: String, required:true ,minlength: 6},
        Description: String,
        Avatar: {type:String, default:'https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/avatars/2.png'},
        Price: Number,
        QtStock: {type: Number, default: 1, min: 1},
        idCategorie: String,
        Status: {type: Boolean,default: true}
     },
     {
         timestamps: true,
     }
)
//products model
const Products = mongoose.model('products',userSchema)
module.exports = Products