//Get All Products
const getAllProducts = async (req, res, next) => {
    //const products = await Product.find();
    res.status(200).json({
        // success: true,
        // products
        message: "Route is working"
    })
}

module.exports = {getAllProducts};