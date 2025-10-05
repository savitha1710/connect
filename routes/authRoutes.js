// const express = require("express");
// const router = express.Router();
// const { registerStudent, loginStudent } = require("../controllers/authController");

// router.post("/register", registerStudent);
// router.post("/login", loginStudent);

// module.exports = router;













const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
