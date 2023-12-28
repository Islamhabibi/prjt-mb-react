const mongoose = require('mongoose')
//team schema
const userSchema = new mongoose.Schema(
    {
        Name: {type: String, required:true ,minlength: 6},
        Description: String,
        Avatar: {type:String, default:'http://res.cloudinary.com/dm5ktvety/image/upload/v1703772230/product_r3fdlb.jpg'},
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