const { Router } = require("express");
const {
  getUsers,
  putUsers,
  postUser,
  deleteUser,
  patchUser,
} = require("../controllers/UserController");

const router = Router();

router.get("/", getUsers);

router.put("/:id", putUsers);

router.post("/", postUser);

router.delete("/", deleteUser);

router.patch("/", patchUser);

module.exports = router;
