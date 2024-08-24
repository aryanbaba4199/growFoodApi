const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        rquired: true,
        type : String,
    },
    description : {
        rquired: true,
        type : String,
    },
    brand : {
        type : String,
        required: true,
    },
    categories : {
        type : String,
        required: true,
    },
    subCategory : {
        type : String,
    },
    image : {
        required: true,
        type : [],
    },
    discount : {
        type : Number,
        required: true,
    },
    
    price : {
        type : Number,
        required: true,
    },
    sellingPrice : {
        type : Number,
        required: true,
    },
    unit : {
        type : String,
        required: true,
    },
    productQty : {
        required: true,
        type : String,
    },
    incDecBy : {
        required : true,
        type : Number,
    },

    minimumOrderQty : {
        required : true,
        type : Number,
    },
    availableQty : {
        required : true,
        type : Number,
    },
    foodPrefence : {
        type : String,
    },
    life : {
        type : String,
    }
})

module.exports = mongoose.model('Product', productSchema);