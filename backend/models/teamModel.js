const mongoose = require('mongoose')
//team schema
const userSchema = new mongoose.Schema(
    { 
        FullName: {type: String, required:true},
        UserName:  {type: String, required:true,unique: true},
        Phone: Number,
        Avatar: {type:String, default:'https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/avatars/2.png'},
        Email: {type: String, required:true,unique: true},
        Password: {type: String, required:true,minlength: 8},
        isEnabled: {type: Boolean,default: true},
        Profile: {
            type: String,
            enum: ['SuperAdmin', 'Admin'],
            default: 'Admin'
        },
    },
        {
            timestamps: true,
        }

    
    )
    //User model
    const Team = mongoose.model('Team',userSchema)
    module.exports = Team