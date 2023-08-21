const express = require("express");
const customerController = require("../controllers/customer.controller");
const router = express.Router();
const Middleware = require("../middleware/");

router.post(
  "/customer",
  [Middleware.protect, Middleware.role],
  customerController.create
);
router.get("/customer", Middleware.protect, customerController.get);
router.put(
  "/customer/:id",
  [Middleware.protect, Middleware.role],
  customerController.update
);
router.delete(
  "/customer/:id",
  [Middleware.protect, Middleware.role],
  customerController.delete
);

module.exports = router;
