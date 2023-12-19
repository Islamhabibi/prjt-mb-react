const {body,  validationResult}= require("express-validator")

exports.categorievalidation= [
    body("Title", "You have to put a category name").notEmpty(),
    body("Title", "Minimum length 4 characters").isLength({min:4})
]
exports.teamvalidation= [
    body("FullName","You have to put your first name").notEmpty(),
    body("UserName","You have to put your Username").notEmpty(),
    body("Email","Your email is invalid").isEmail(),
    body("Password","Minimum length 8 characters ").isLength({min:8})
]
exports.customervalidation= [
    body("FirstName","You have to put your first name").notEmpty(),
    body("LastName","You have to put your Username").notEmpty(),
    body("Email","Your email is invalid").isEmail(),
    body("Password","Minimum length 8 characters ").isLength({min:8})
]
exports.loginvalidation= [
    body("email","email is note valide").isEmail(),
    body("password","minimum length 8 cara").isLength({min:7})
]
exports.validation = (req,res,next)=>{
    const error = validationResult(req)
    if (!error.isEmpty()){
        res.status(400).send({error:error.array()})
    }
    next()
}