const Product = require('../models/products/product');
const Brand = require('../models/products/brandSchema');
const Category = require('../models/products/categories');

// Getting Products
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

// Creating Product
exports.createProduct = async (req, res, next) => {
    const productData = req.body; // Directly using req.body
    console.log(productData);
    try {
        // Creating Brand
        const existingBrand = await Brand.findOne({ name: productData.brand });
        if (!existingBrand) {
            let newBrand = new Brand({ name: productData.brand });
            await newBrand.save();
        }

        // Creating Categories
        const existingCategories = await Category.findOne({ name: productData.categories });
        if (!existingCategories) {
            let newCategories = new Category({ name: productData.categories });
            await newCategories.save();
        }

        const newProduct = new Product(productData);
        await newProduct.save();
        res.status(201).json({ message: "Product created successfully" });
    } catch (err) {
        console.error(err);
        next(err);
    }
}

// Getting Brands 
exports.getBrands = async (req, res, next) => {
    try {
        const brands = await Brand.find();
        res.status(200).json(brands);
    } catch (err) {
        console.error(err);
        next(err);
    }
}

// Getting Categories
exports.getCategories = async (req, res, next) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        console.error(err);
        next(err);
    }
}
