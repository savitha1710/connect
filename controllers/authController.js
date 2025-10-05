
















// const User = require("../models/User");
// const bcrypt = require("bcryptjs");

// exports.register = async (req, res) => {
//   try {
//     const { name, email, password, role, department, rollNo, designation, phone, linkedinUrl } = req.body;

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: "Email already registered" });

//     // Hash password
//     const hashed = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       name,
//       email,
//       password: hashed,
//       role,
//       department,
//       rollNo: role === "student" ? rollNo : undefined,
//       designation: role === "staff" ? designation : undefined,
//       phone,
//       linkedinUrl,
//     });

//     await newUser.save();
//     res.json({ message: `${role.charAt(0).toUpperCase() + role.slice(1)} registered successfully` });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

//     res.json({ message: "Login successful", user });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };








const User = require("../models/User");
const bcrypt = require("bcryptjs");

// REGISTER
exports.register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      department,
      rollNo,
      designation,
      phone,
      linkedinUrl,
      batch,
      graduationYear,
      currentCompany,
      currentDesignation,
    } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    // Hash password
    const hashed = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashed,
      role,
      department,
      phone,
      linkedinUrl,
      // Role-specific fields
      rollNo: role === "student" ? rollNo : undefined,
      designation: role === "staff" ? designation : undefined,
      batch: role === "alumni" ? batch : undefined,
      graduationYear: role === "alumni" ? graduationYear : undefined,
      currentCompany: role === "alumni" ? currentCompany : undefined,
      currentDesignation: role === "alumni" ? currentDesignation : undefined,
    });

    await newUser.save();
    res.json({ message: `${role.charAt(0).toUpperCase() + role.slice(1)} registered successfully` });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
