const { Router } = require("express");
const {
  getUsers,
  putUsers,
  postUser,
  deleteUser,
  patchUser,
} = require("../controllers/UserController");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate-fields");
const {
  isValidRole,
  isMailRegistered,
  isValidUser,
} = require("../helpers/db-validators");

const router = Router();

router.get("/", getUsers);

router.put(
  "/:id",
  [
    check("id", "ID must be valid.").isMongoId(),
    check("id").custom(isValidUser),
    check("role").custom(isValidRole),
    validateFields,
  ],

  putUsers
);

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("mail", "Mail is not valid").isEmail(),
    check("mail").custom(isMailRegistered),
    check("password", "Password is required").isLength(6).not().isEmpty(),
    check("role", "Role is required").not().isEmpty(),
    check("role").custom(isValidRole),
    // check("role", "You have to choose a valid role").isIn([
    //   "ADMIN_ROLE",
    //   "USER_ROLE",
    // ]),
    validateFields,
  ],
  postUser
);

router.delete(
  "/:id",
  [
    check("id", "ID must be valid.").isMongoId(),
    check("id").custom(isValidUser),
    validateFields,
  ],
  deleteUser
);

router.patch("/", patchUser);

module.exports = router;
