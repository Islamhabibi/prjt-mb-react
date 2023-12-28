const Customer= require('../models/CustomerModel')
const {mongoose} = require('mongoose')
//crypt MDP
const bcrypt = require('bcryptjs')
//jwt= json web token
const jwt  =  require('jsonwebtoken')
/**
 * @route GET /customer/all
 * @desc Get customer data
 * @access Private
 */ 
exports.getCustomer = async (req,res) =>
{
    try {
        const AllCustomers = await Customer.find()
        res.status(200)
        .send({message:'List of users',AllCustomers})
    } catch (error) {
        res.status(500)
        .send({message:'Erreur'}) 
    }
}
/**
 * @route POST /Customer/addCustomer
 * @desc Add new Customer
 * @access Public
 */
exports.Register = async (req,res)=>
{  
     const {
        FirstName,LastName,Avatar,Email, Password,isEnabled,
       Phone,Adress,Adress_Additional,Postal_code,
        City,Country,Social_title
    }=req.body
   // console.log(req.body)
    //chek if user exists
    const userExist = await Customer.findOne({Email})
    //console.log(userExist)
    if (userExist){
        res.status(400)
        .send({message:'User  already exits',userExist})
    }
    
    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(Password,salt)
    //lingne ajouter
    const user = new Customer({
        FirstName, LastName, Avatar, Email, Password: hashedPassword, isEnabled,
      Phone, Adress, Adress_Additional, Postal_code,
      City, Country, Social_title
    })
    const token=jwt.sign({id:user._id},"123456")
    await user.save()
    //create user
    //const user = await Team.create({FirstName,UserName,Password:hashedPassword,Email,Avatar,isEnabled,Profile,Phone})
    if (user)
    {
        res.status(200).json({
            _id: user.id,
            FirstName: user.FirstName,
            LastName: user.LastName,
            Avatar: user.Avatar,
            Email: user.Email,
            Password: user.Password,
            isEnabled: user.isEnabled,
            Phone: user.Phone,
            Adress:user.Adress,
            Adress_Additional: user.Adress_Additional,
            Postal_code:user.Postal_code,
            City:user.City,
            Country:user.Country,
            Social_title:user.Social_title,
            
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
 * @route POST /Customer/login
 * @desc Login
 * @access Public
 */
exports.LoginCustomer= async (req,res)=>
{
    //get user data 
    const {Email,Password} = req.body
    if(!Email || !Password){
        res.status(400)
        .send({message:'Please include all filds'})
    }

    try {
        const user= await Customer.findOne({Email})
        if (user &&
            (await bcrypt.compare(
                typeof Password === 'undefined'? '': Password,
                user.Password
            ))
            ){res.status(200).json({user:user,
                token: generateToken(user.id),
              });
            }else {
                res.status(400)
                .send({message:'Invalid credentials'})
            }
    } catch (error) {
        res.status(500)
        .send(error)
    }
}
/**
 * @route PUT /Customer/updateuser/id
 * @desc Update  user
 * @access Prive
 */
exports.UpdateUser = async (req, res) => {
    try {
        const userUpdate = await Customer.findById(req.params.id);
        if (userUpdate) {
           // if (req.body) {
                
                const {
                    FirstName,LastName,Avatar,Email, Password,isEnabled,
                   Phone,Adress,Adress_Additional,Postal_code,
                    City,Country,Social_title
                 } = req.body;
               // console.log(req.body)
                //hash password
                if (Password) {
                    const salt = await bcrypt.genSalt(10);
                    const hashedPassword = await bcrypt.hash(Password, salt);
                    const UserModif = await Customer.findByIdAndUpdate(
                        req.params.id,
                        { $set: { 
                            FirstName,LastName,Avatar,Email, Password: hashedPassword
                            ,isEnabled,Birthdate,Phone,Adress,Adress_Additional,
                            Postal_code, City,Country,Social_title       
                        } },
                        { new: true }
                    );
                    res.status(200)
                        .send({ message: "User modifie", UserModif });
                } else {
                    const UserModif = await Customer.findByIdAndUpdate(
                        req.params.id,
                        { $set: { 
                            FirstName,LastName,Avatar,Email, Password,isEnabled,
                           Phone,Adress,Adress_Additional,Postal_code,
                            City,Country,Social_title
                         } },
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
 * @route GET /Customer/user
 * @desc Get Customer data
 * @access Private
 */
exports.getuser = async (req,res) =>
{
    try {
        const userdata = await Customer.findById(req.params.id)
        if (!userdata) {
            // If user data is not found
            return res.status(404).send({ message: 'User not found' });
          }
        //console.log('getuser contorller ',userdata)
        
            res.status(200)
            .send({message:'user ',userdata})
         
        
    } catch (error) {
        res.status(500)
        .send({message:'Erreur'}) 
    }
}
/**
 * @route DELETE /team/deleteuser/id
 * @desc DELETE  user
 * @access Prive
 */
exports.DeleteUser= async (req,res)=>
{
    try {
        const userDelete = await Customer.findByIdAndDelete(req.params.id)
        res.status(200)
            .send({message: 'User deleted ', userDelete})
    } catch (error) {
        res.status(500)
            .send({ message: 'Erreur' });
    }
}