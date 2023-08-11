const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const { login } = require("../controllers/AuthController");

const router = Router();

router.post(
  "/login",
  [
    check("mail", "Mail is not valid").isEmail(),
    check("password", "Password is required").isLength(6).not().isEmpty(),
    validateFields,
  ],
  login
);

module.exports = router;
