const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    department: { type: String, required: true },
    rollNo: { type: String, required: true, unique: true },
    role: { type: String, default: "student" },
    verified: { type: Boolean, default: false },
    headline: { type: String, default: "" },
    education: { type: Array, default: [] },
    skills: { type: Array, default: [] },
    experience: { type: Array, default: [] },
    posts: { type: Array, default: [] },
    likes: { type: Array, default: [] },
    connections: { type: Array, default: [] },
    profilePic: { type: String, default: "" },
    phone: { type: String, default: "" },
    linkedinUrl: { type: String, default: "" },
    bio: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
