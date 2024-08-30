const express = require("express");
const router = express.Router();


const {
  getProducts,
  createProduct,
  getBrands,
  getCategories,
  getProduct,
  updateProduct,
  createBrand,
  updateBrands,
  deleteBrand,
  createCategory,
  deleteProduct,
  deleteCategory,
  updateCategory,
  createUnit, getUnit
} = require("../controller/productController"); // Make sure the path is correct

router.get("/", getProducts);
router.get("/product/:id", getProduct);
router.put("/updateProduct", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.post("/", createProduct);

router.get("/brands", getBrands);
router.put("/updateBrand/:id",  updateBrands);
router.post("/createBrand", createBrand);
router.delete("/deleteBrand/:id", deleteBrand);

router.post("/createCategory", createCategory);
router.get("/category", getCategories);
router.put("/updateCategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);

router.get("/getUnit", getUnit)
router.post("/createUnit", createUnit);


module.exports = router;
