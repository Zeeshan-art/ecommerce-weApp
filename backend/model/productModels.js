const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter the Product Name"]
    },
    description:{
        type: String,
        required: [true, "Please Enter the Product Description"]
    },
    price:{
        type: Number,
        required: [true, "Please Enter the Product Price"],
        maxLength: [true,"Price cannot excees 8 characters"]
    },
    rating:{
        type: Number,
        default: 0,
    },
    images:[
        {
            public_id:{
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }
        }
    ],
    category:{
        type: String,
        required: [true,"Please Enter Product Category"]
    },
    Stock:{
        type: Number,
        required: [true,"Please Enter Product Stock"],
        maxLength: [true,"Stock cannot exceed 8 characters"],
        default: 1
    },
    numOfReview:{
        type: String,
        default: 0
    },
    review:[
        {
            name:{
                type:String,
                required: true
            },
            review:{
                type: Number,
                required: true
            },
            comment:{
                type: String,
                required: true
            }
            
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Product", productSchema);