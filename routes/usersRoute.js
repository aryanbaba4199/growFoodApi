const express = require("express");
const router = express.Router();
const {
  getUser,
  getUsers,
  createUser,
  loginUser,
  getCurrentUser,
  createAddress,
  deleteAddress,
  getDeliveryAddress,
  updateAddress,
  getAddress,
  updateUser,
} = require("../controller/users/authController");
const authenticateJWT = require("../middleware/authMiddleware");

router.get("/me", authenticateJWT, getCurrentUser);
router.get("/:email", getUser);
router.get("/message", authenticateJWT, getUsers);
router.post("/register", createUser);
router.put('/updateUser/:id', updateUser);
router.post("/login", loginUser);
router.post("/createAddress", createAddress);
router.put("/updateAddress/:id", updateAddress);
router.delete("/deleteAddress/:id", deleteAddress);
router.get("/getAddress/:id", getAddress);
router.get("/getDeliveryAddress/:id", getDeliveryAddress);

module.exports = router;
