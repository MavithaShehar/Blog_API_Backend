const express = require('express')
const router = express.Router();
const { authController, login } = require("../controllers/authController");


router.post("/register", authController);
router.post("/login", login);

module.exports = router;