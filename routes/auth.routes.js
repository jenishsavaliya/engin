const express = require("express");
const authController = require("../controllers/auth.controller");
const router = express.Router();

router.post("/login", async (req, res, next) => {
  const body = req.body;
  try {
    let loginUser = await authController.login(body);
    if (loginUser) {
      res.status(200).json(loginUser);
    }
  } catch (err) {
    res.status(500).json("somthing went wrong");
  }
});

module.exports = router;
