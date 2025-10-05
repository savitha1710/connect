// adminController.js
const User = require("../models/User");

// Admin login
exports.adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hardcoded admin credentials (for simplicity)
    if (email !== "admin@college.com" || password !== "admin@123") {
      return res.status(403).json({ message: "Invalid admin credentials" });
    }

    // Return a dummy admin object if needed
    res.json({ 
      message: "Admin login successful", 
      admin: { name: "Admin User", email, role: "admin" } 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Verify a user
exports.verifyUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, { verified: true });
    res.json({ message: "User verified successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
