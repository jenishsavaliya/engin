const express = require("express");
const dailyCheckout = require("../controllers/dailyCheckout.controller");
const router = express.Router();
const Middleware = require("../middleware/");

router.post("/checkout", Middleware.protect, dailyCheckout.create);
router.get("/checkout", Middleware.protect, dailyCheckout.get);
router.get(
  "/checkout-by-machine/:id",
  Middleware.protect,
  dailyCheckout.getByMachine
);
router.put("/checkout/:id", Middleware.protect, dailyCheckout.update);
router.delete("/checkout/:id", Middleware.protect, dailyCheckout.delete);

module.exports = router;
