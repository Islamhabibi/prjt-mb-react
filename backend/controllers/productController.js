const products= require("../models/productModel")

exports.getProduct=async(req,res)=>{
    try {
        const AllProducts= await products.find()
         res.status(200)
            .send({message:"ok",AllProducts})

    } catch (error) {
        res.status(500)
            .send({message:"erreur"})
    }
}
//get prod selon la categorie 
exports.getProductCateg = async (req,res)=>{
  
  try {
    const ProductCatg = await products.find({ idCategorie: req.params.name })
    const productCount = await products.countDocuments({ idCategorie: req.params.name });
    if (ProductCatg) {
      // if (req.body) {
           
           
           res.status(200)
        .send({message:'ok',ProductCatg})
       // console.log(ProductCatg)
    }else{
      res.status(200)
        .send({message:'Aucun produits',ProductCatg})
    }
      
  } catch (error) {
    res.status(500)
            .send({message:"erreur"})
  }
}
/*exports.AddProduct= async(req,res) =>{
    try {
        const product = new products(req.body)
        await product.save()
        res.status(200)
            .send({message:"ok",product})
    } catch (error) {
        res.status(500)
        .send({message:"erreur"})
    }
}*/
exports.AddProduct = async (req, res) => {
    try {
      const { Name } = req.body;
  
      // Check if product exists
      const prodExists = await products.findOne({Name});
  
      if (prodExists) {
        return res.status(400).json({
          message: "Product already exists",
          prodExists,
        });
      }
  
      // Create product
      const product = await products.create(req.body);
  
      if (product) {
      
        return res.status(200).json({
          _id: product.id,
          Name: product.Name,
          Description: product.Description,
          Avatar: product.Avatar,
          Price: product.Price,
          QtStock: product.QtStock,  
          idCategorie: product.idCategorie,
          Status: product.Status,
        });
      } else {
        return res.status(400).json({
          message: "Invalid product data",
        });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  };
  
exports.DeletProduct = async(req,res) =>{
    try {
        const product = await products.findByIdAndDelete(req.params.id)
        res.status(200)
            .send({message:"product supprime",product})
    } catch (error) {
        res.status(500)
        .send({message:"erreur"})
    }
}
exports.UpdateProduct = async(req,res)=>{
    try {
        const product = await products
            .findByIdAndUpdate(req.params.id,{$set:req.body})
            res.status(200)
            .send({message:"Modified Product ",product})    
    } catch (error) {
        res.status(500)
        .send({message:"erreur"})
    }
}
exports.findProduct = async(req,res)=>{
    try {
        const product= await products.findById(req.params.id)
        res.status(200)
        .send({message:"product existe",product}) 
    } catch (error) {
        res.status(500)
        .send({message:"erreur"})
    }
}
exports.deletProducts = async(req,res)=>{
    const {data}= req.body
    try {
        const product= await products
        .deleteMany({_id:{$in:data}})
        res.status(200)
        .send({message:"products supprime",product}) 
    } catch (error) {
        res.status(500)
        .send({message:"erreur"})
    }
}