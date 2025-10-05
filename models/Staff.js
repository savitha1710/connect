// models/Staff.js
const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String }, // e.g., Professor, Lab Assistant
    phone: { type: String },
    linkedinUrl: { type: String },
    role: { type: String, default: "staff" },
    verified: { type: Boolean, default: false },

    // Social network fields
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Like" }],
    connections: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Staff", staffSchema);
