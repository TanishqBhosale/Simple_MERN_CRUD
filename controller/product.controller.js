const Product = require('../models/product.model')


const getProducts = async (req,res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products)
    
    }catch(error){
        res.status(500).json({message:error.massage})
    }
}

const getProduct = async (req,res)=>{
    
    try{
        const {id}=req.params;
        const products = await Product.findById(id);
        res.status(200).json(products)
    
    }catch(error){
        res.status(500).json({message:error.massage})
    }
}

const createProduct = async (req,res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product)
        
    }catch(error){
        res.status(500).json({message:error.massage})
    }
}

const updateProduct = async (req,res)=>{
    
    try{
        const {id}=req.params;
        const product = await Product.findByIdAndUpdate(id,req.body);
        if (!product){
            return res.status(400).json({meggage:"Product not found"})
        }
        const updateProduct = await Product.findById(id);    
        res.status(200).json(updateProduct)
    }catch(error){
        res.status(500).json({message:error.massage})
    }
}

const deleteProduct = async (req,res)=>{
    try{
        const {id}=req.params;
        const DeleteProduct = await Product.findByIdAndDelete(id);
        if (!DeleteProduct){
            return res.status(400).json({meggage:"Product not found"})
        }
        res.status(200).json({message:"Product deleted Sucessfully"})
        
    }catch(error){
        res.status(500).json({message:error.massage})
    }
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}