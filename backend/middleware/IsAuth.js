const jwt = require('jsonwebtoken');
const users = require('../models/teamModel')
const Customer= require('../models/CustomerModel')
exports.IsAuth=async(req,res,next)=>{
    const token= req.header("token")
    try {
        //
        const decode=jwt.decode(token)
        //console.log(decode)
        if(!decode){
            res.status(400).send({msg:'you are not authorized'})
        }
        const user = await users.findById(decode.id)
        req.user=user
        next()
    } catch (error) {
        console.log(error)
    }
}
exports.IsAuthCustomer=async(req,res,next)=>{
    const token= req.header("token")
    try {
        //
        const decode=jwt.decode(token)
       // console.log(decode)
        if(!decode){
            res.status(400).send({msg:'you are not authorized'})
        }
        const user = await Customer.findById(decode.id)
        req.user=user
        next()
    } catch (error) {
        console.log(error)
    }
}