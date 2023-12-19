const mongoose = require('mongoose')
//team schema
const userSchema = new mongoose.Schema(
    { 
        FirstName: {type: String, required:true},
        LastName: {type: String, required:true},
        Phone: Number,
        Avatar: {type:String, default:'https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/avatars/2.png'},
        Email: {type: String, required:true,unique: true},
        Password: {type: String, required:true,minlength: 8},
        Adress: String,
        Adress_Additional:String,
        Postal_code:Number,
        City:String,
        Country:String,
        Social_title: {
            type: String,
        enum: ['Mr', 'Mrs']
        },
        isEnabled: {type: Boolean,default: true},
        Profile:{
            type: String,
            default: "customer"
        }
         
    },
        {
            timestamps: true,
        }

    
    )
    //User model
    const Customer = mongoose.model('Customer',userSchema)
    module.exports = Customer