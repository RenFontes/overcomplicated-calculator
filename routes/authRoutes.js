const express = require("express");
const router = express.Router();
const { catchErrors } = require("../handlers/errorHandlers");
const authController = require("../controllers/authController.js");

// when user is created it is immediately logged in, so we can validate the token before saving it to our database
router.post('/register', authController.validateIdToken, catchErrors(authController.registerUser));

module.exports = router;