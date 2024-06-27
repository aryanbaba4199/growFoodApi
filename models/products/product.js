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
    productQty : {
        type : String,
    },
    minimumOrderQty : {
        type : Number,
    },
    availableQty : {
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