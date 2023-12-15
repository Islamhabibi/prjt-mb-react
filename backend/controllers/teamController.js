const Team = require('../models/teamModel')
const {mongoose} = require('mongoose') 
//crypt MDP
const bcrypt = require('bcryptjs')
//jwt= json web token
const jwt  =  require('jsonwebtoken')
/**
 * @route GET /team/all
 * @desc Get users data
 * @access Private
 */
exports.getTeam = async (req,res) =>
{
    try {
        const AllUsers = await Team.find()
        res.status(200)
        .send({message:'List of users',AllUsers})
    } catch (error) {
        res.status(500)
        .send({message:'Erreur'}) 
    }
}
/**
 * @route GET /team/user
 * @desc Get user data
 * @access Private
 */
exports.getuser = async (req,res) =>
{
    try {
        const userdata = await Team.findById(req.params.id)
        if (!userdata) {
            // If user data is not found
            return res.status(404).send({ message: 'User not found' });
          }
        console.log('getuser contorller ',userdata)
        
            res.status(200)
            .send({message:'List of users',userdata})
         
        
    } catch (error) {
        res.status(500)
        .send({message:'Erreur'}) 
    }
}
/**
 * @route POST /team/adduser
 * @desc Add new user
 * @access Public
 */
exports.AddUser = async (req,res)=>
{  
     const {FullName,UserName,Avatar,Email, Password,isEnabled,Profile,Phone}=req.body
    console.log(req.body)
    //chek if user exists
    const userExist = await Team.findOne({Email})
    console.log(userExist)
    if (userExist){
        res.status(400)
        .send({message:'User  already exits',userExist})
    }
    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(Password,salt)
    //create user
    const user = await Team.create({FullName,UserName,Password:hashedPassword,Email,Avatar,isEnabled,Profile,Phone})
    if (user)
    {
        res.status(200).json({
            _id: user.id,
            FullName: user.FullName,
            UserName: user.UserName,
            Avatar: user.Avatar,
            Email: user.Email,
            Password: user.Password,
            isEnabled: user.isEnabled,
            Profile: user.Profile,
            Phone: user.Phone,
            token: generateToken(user.id)
        })
    }else{
        res.status(400)
        .send({message: 'Invalid user data'})
    }
}
//function to generate token 
const generateToken = (id) =>
{
    const secretKey = process.env.JWT_SECRET || 'abc123'
    return jwt.sign({id},secretKey,{
        expiresIn: '15d'
    })
}
/**
 * @route POST /team/login
 * @desc Login
 * @access Public
 */
exports.LoginUser= async (req,res)=>
{
    //get user data 
    const {Email,Password} = req.body
    if(!Email || !Password){
        res.status(400)
        .send({message:'Please include all filds'})
    }
    const user= await Team.findOne({Email})
    if (user &&
        (await bcrypt.compare(
            typeof Password === 'undefined'? '': Password,
            user.Password
        ))
        ){
            res.status(200).json({
                _id: user.id,
                UserName: user.UserName,
                Email: user.Email,
                token : generateToken(user.id)
            })
        }else {
            res.status(400)
            .send({message:'Invalid credentials'})
        }
}
/**
 * @route PUT /team/updateuser/id
 * @desc Update  user
 * @access Prive
 *//*
exports.UpdateUser = async(res,req)=>
{
    
    try {
        const userUpdate = await Team.findById(req.params.id)
        
    if (userUpdate)
    {
        if (req.body.Password){
            const {FullName,UserName,Avatar,Email, Password,isEnabled,Profile}=req.body
            //hash password
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(Password,salt)
            const UserModif = await Team.findByIdAndUpdate(
                req.params.id, 
                {$set:{FullName,UserName,Password:hashedPassword,Email,Avatar,isEnabled,Profile}},
                {new:true}
                )
                res.status(200)
                .send({message:"User modifie",UserModif})
        }else{
            const UserModif = await Team.findByIdAndUpdate(
                req.params.id, 
                {$set:{FullName,UserName,Password,Email,Avatar,isEnabled,Profile}},
                {new:true}
                )
                res.status(200)
                .send({message:"User modifie",UserModif})
        }
    }
    } catch (error) {
        res.status(500)
        .send({message:'Erreur'}) 
    }
}*/
exports.UpdateUser = async (req, res) => {
    try {
        const userUpdate = await Team.findById(req.params.id);
        if (userUpdate) {
           // if (req.body) {
                console.log(req.body)
                const { FullName, UserName, Avatar, Email, Password, isEnabled, Profile,Phone } = req.body;

                //hash password
                if (Password) {
                    const salt = await bcrypt.genSalt(10);
                    const hashedPassword = await bcrypt.hash(Password, salt);
                    const UserModif = await Team.findByIdAndUpdate(
                        req.params.id,
                        { $set: { FullName, UserName, Password: hashedPassword, Email, Avatar, isEnabled, Profile,Phone } },
                        { new: true }
                    );
                    res.status(200)
                        .send({ message: "User modifie", UserModif });
                } else {
                    const UserModif = await Team.findByIdAndUpdate(
                        req.params.id,
                        { $set: { FullName, UserName, Email, Avatar, isEnabled, Profile,Phone } },
                        { new: true }
                    );
                    res.status(200)
                        .send({ message: "User modifie", UserModif });
                }
            //} 
        }
    } catch (error) {
        res.status(500)
            .send({ message: 'Erreur' });
    }
};
/**
 * @route DELETE /team/deleteuser/id
 * @desc DELETE  user
 * @access Prive
 */
exports.DeleteUser= async (req,res)=>
{
    try {
        const userDelete = await Team.findOneAndDelete(req.params.id)
        res.status(200)
            .send({message: 'User deleted ', userDelete})
    } catch (error) {
        res.status(500)
            .send({ message: 'Erreur' });
    }
}
