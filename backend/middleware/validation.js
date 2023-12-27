const {body,  validationResult}= require("express-validator")

exports.categorievalidation= [
    body("Name", "You have to put a category name").notEmpty(),
    body("Name", "Minimum length 4 characters").isLength({min:4})
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
    body("Email","email is note valide").isEmail(),
    body("Password","minimum length 8 cara").isLength({min:7})
]
exports.productvalidation= [
    body("Name","You have to put the name of product").notEmpty(),
    body("Name","minimum length 4 cara").isLength({min:4})
]
exports.validation = (req,res,next)=>{
    const error = validationResult(req)
    if (!error.isEmpty()){
        res.status(400).send({error:error.array()})
    }
    next()
}