const express = require("express");
const userController = require("../controllers/user.controller");
const router = express.Router();
const Middleware = require("../middleware/");

router.post(
  "/user",
  [Middleware.protect, Middleware.role],
  userController.create
);
router.get("/user", [Middleware.protect, Middleware.role], userController.get);
router.put(
  "/user/:id",
  [Middleware.protect, Middleware.role],
  userController.update
);
router.delete(
  "/user/:id",
  [Middleware.protect, Middleware.role],
  userController.delete
);

module.exports = router;
