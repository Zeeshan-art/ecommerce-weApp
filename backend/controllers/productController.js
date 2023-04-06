const Product = require("../model/productModels");

//Create Product
const createProduct = async(req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(200).json({
        success:true,
        product
    })
}

//Get All Products
const getAllProducts = async (req, res, next) => {
    const products = await Product.find();
    res.status(200).json({
        success: true,
        products,
        //message: "Route is working"
    }) 
}

const getProductDetail = async(req, res, next) =>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(404).json({
            success: false,
            message: "Product Not Found"
        })
    }
    res.status(200).json({
        success: true,
        product
    })
}

const updateProduct = async(req,res,next)=>{
    const product= await Product.findById(req.params.id);

    if(!product){
        console.log("enter")
        return res.status(404).json({
            success: false,
            message: "Product Not Found"
        })
    }

    await product.updateOne(req.body);

    res.status(200).json({
        success: true,
        message: "Product Update Successfully"
    });
}

const deleteProduct = async(req, res, next) =>{
    
    let product = await Product.findById(req.params.id);
    
    if(!product){
        return res.status(404).json({
            success: true,
            message: "Product Not Found"
        })
    }

    await product.deleteOne();
    res.status(200).json({
        success:true,
        message: "Product Deleted Successfull"
    })
}

module.exports = {
    getAllProducts,
    createProduct,
    getProductDetail,
    deleteProduct,
    updateProduct
};