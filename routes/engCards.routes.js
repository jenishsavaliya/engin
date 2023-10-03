const express = require("express");
const engCardController = require("../controllers/engCardController.controller");
const router = express.Router();
const Middleware = require("../middleware/");

router.post("/engCard", Middleware.protect, engCardController.create);
router.put("/engCard/:id", Middleware.protect, engCardController.update);
router.delete("/engCard/:id", Middleware.protect, engCardController.delete);

module.exports = router;
