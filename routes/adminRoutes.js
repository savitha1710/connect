const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Admin login route
router.post("/login", adminController.adminLogin);

// Get all users
router.get("/users", adminController.getAllUsers);

// Verify a user
router.put("/verify/:id", adminController.verifyUser);

// Delete a user
router.delete("/delete/:id", adminController.deleteUser);

module.exports = router;
