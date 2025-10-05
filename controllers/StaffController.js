const Staff = require("../models/Staff");
const bcrypt = require("bcryptjs");

exports.registerStaff = async (req, res) => {
  try {
    const { name, email, password, department, designation, phone, linkedinUrl } = req.body;

    // Check if email already exists
    const existing = await Staff.findOne({ email });
    if (existing) return res.status(400).json({ message: "Email already registered" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new staff
    const staff = new Staff({
      name,
      email,
      password: hashedPassword,
      department,
      designation,
      phone,
      linkedinUrl,
      role: "staff",
      verified: false,
      posts: [],
      likes: [],
      connections: [],
    });

    await staff.save();
    res.json({ message: "Staff registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
