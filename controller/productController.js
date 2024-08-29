const Product = require("../models/products/product");
const Brand = require("../models/products/brandSchema");
const Category = require("../models/products/categories");
const product = require("../models/products/product");
const Unit = require("../models/products/unitSchema");

// Getting Products
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.getProduct = async (req, res, next) => {
  const { id } = req.params;
  console.log("Product Id is ",id);

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

exports.createProduct = async (req, res, next) => {
  const productData = req.body;

  try {
    const existingBrand = await Brand.findOne({ name: productData.brand });
    if (!existingBrand) {
      let newBrand = new Brand({ name: productData.brand });
      await newBrand.save();
    }

    // Creating Categories
    const existingCategories = await Category.findOne({
      name: productData.categories,
    });
    if (!existingCategories) {
      let newCategories = new Category({ name: productData.categories });
      await newCategories.save();
    }

    const newProduct = new Product(productData);
    await newProduct.save();
    res.status(200).json({ message: "Product created successfully" });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  const formData = req.body.formData;
  const id = formData._id;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        $set: {
          name: formData.name,
          description: formData.description,
          brand: formData.brand,
          categories: formData.categories,
          subCategory: formData.subCategory,
          image: formData.image,
          discount: formData.discount,
          price: formData.price,
          sellingPrice: formData.sellingPrice,
          productQty: formData.productQty,
          minimumOrderQty: formData.minimumOrderQty,
          availableQty: formData.availableQty,
          foodPrefence: formData.foodPrefence,
          life: formData.life,
        },
      },
      { new: true }
    );

    if (!updatedProduct) {
      console.log("Product not found");
      return res.status(404).json({ message: 'Product not found' });
    }
    console.log("Product updated");
    res.status(200).json({ message: 'Product updated' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};


exports.deleteProduct = async(req, res, next) => {
  const {id} = req.params;
  try{
    const product = await Product.findByIdAndDelete({_id : id});
    if(product){
      console.log('Product deleted');
      res.status(200).json({ message: 'Product deleted' });
    }else{
      console.log('Product not found');
      res.status(404).json({ message: 'Product not found' });
    }
  }catch(err){
    console.log(err);
    res.status(500);
    next(err);
  }
};


// Getting Brands
exports.getBrands = async (req, res, next) => {
  try {
    const brands = await Brand.find();
    res.status(200).json(brands);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.updateBrands = async (req, res, next) => {
  const { id } = req.params;
  const { name, icon } = req.body;
  console.log("Brand update triggered", name, icon);

  try {
    const brand = await Brand.findByIdAndUpdate(
      id,
      { name, icon },
      { new: true }
    );

    if (brand) {
      res.status(200).json({ message: "Brand updated successfully", brand });
    } else {
      res.status(404).json({ message: "Brand not found" });
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

exports.createBrand = async (req, res, next) => {
  const { name, icon } = req.body;
  console.log(name, icon);
  try {
    const existingBrand = await Brand.findOne({ name });
    if (!existingBrand) {
      let newBrand = new Brand({ name, icon });
      await newBrand.save();
      res.status(200).json({ message: "Brand created" });
    } else {
      console.log("Brand exist");
      res.status(201).json({ message: "Brand Exists" });
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
};

exports.deleteBrand = async(req, res, next) => {
  const {id} = req.params;
  try{
    const brand = await Brand.findByIdAndDelete({_id : id});
    if(brand){
      console.log("Brand deleted");
      res.status(200).json();
    }else{
      console.log("Brand not found");
      res.status(404).json({message: "Brand not found"});
    }
  }catch(err){
    console.log(err);
    next(err);
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    const { name, icon } = req.body;
    
    const existingCategory = await Category.findOne({ name });
    if (!existingCategory) {
      let newCategory = new Category({ name, icon });
      await newCategory.save();
      res.status(200).json({ message: "Category created" });
    } else {
      console.log("Category exists");
    }
  } catch (err) {
    console.error(err);
    next(err);
  }
};

// Getting Categories
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    console.error(err);
    next(err);
  }
};


exports.updateCategory = async (req, res, next) => {
  const {id} = req.params;
  const {name, icon }= req.body;
  try{
    const category = await Category.findByIdAndUpdate(id, 
      { name, icon },
      { new: true }
    )
    if(category){
      console.log("Category updated")
      res.status(200).json({message : "Category updated"});
    }else{
      console.log("Category not found")
      res.status(404).json({message: "Category not found"});
    }
  }catch(err){
    console.log("Error updating category", err);
    next(err);
  } 
};

exports.deleteCategory = async(req, res, next)=>{
  const {id} = req.params;
  try{
    const category = await Category.findByIdAndDelete({_id : id});
    if(category){
      console.log("Category deleted");
      res.status(200).json({message: "Category deleted"});
    }else{
      console.log("Error deleting category");
      res.status(404).json({message: "Error deleting category"});
    }
  }catch(err){
    console.log("Error deleting category", err);
    next(err);
  }
}

exports.createUnit = async(req, res, next) => {
  console.log(req.body.formData)
  try{
    const unit = new Unit({name : req.body.formData});
    await unit.save();
    res.status(200).json({message: "Unit saved successfully"});

  }catch(err){
    console.log("Error creating unit", err);
    next(err);
  }
};

exports.getUnit = async(req, res, next) => {
  try{
    const units = await Unit.find();
    res.status(200).json(units);
  }catch(err){
    console.log("Error getting", err);
    next(err);
  }
};