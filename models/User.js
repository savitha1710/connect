// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     role: { type: String, enum: ["student", "staff", "alumni"], required: true },
//     department: { type: String },
//     rollNo: { type: String }, // only for students
//     designation: { type: String }, // only for staff
//     verified: { type: Boolean, default: false },
//     headline: { type: String, default: "" },
//     posts: { type: Array, default: [] },
//     likes: { type: Array, default: [] },
//     connections: { type: Array, default: [] },
//     phone: { type: String, default: "" },
//     linkedinUrl: { type: String, default: "" },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("User", userSchema);















const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["student", "staff", "alumni"], required: true },

    // Common fields
    department: { type: String },
    phone: { type: String, default: "" },
    linkedinUrl: { type: String, default: "" },
    headline: { type: String, default: "" },
    posts: { type: Array, default: [] },
    likes: { type: Array, default: [] },
    connections: { type: Array, default: [] },
    verified: { type: Boolean, default: false },

    // Student-specific
    rollNo: { type: String },

    // Staff-specific
    designation: { type: String },

    // Alumni-specific
    batch: { type: String },             // e.g., "2015-2019"
    graduationYear: { type: Number },    // e.g., 2019
    currentCompany: { type: String },    // e.g., "Google"
    currentDesignation: { type: String },// e.g., "Software Engineer"
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
