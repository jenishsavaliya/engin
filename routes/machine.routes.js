const express = require("express");
const machineController = require("../controllers/machine.controller");
const router = express.Router();
const Middleware = require("../middleware/");

router.post(
  "/machine",
  [Middleware.protect, Middleware.role],
  machineController.create
);
router.get("/machine", Middleware.protect, machineController.get);
router.get("/download-pdf", Middleware.protect, machineController.downloadPdf);
router.get(
  "/machine/:id",
  Middleware.protect,
  machineController.getMachineByCustomer
);
router.put("/machine/:id", Middleware.protect, machineController.update);
router.delete("/machine/:id", Middleware.protect, machineController.delete);
router.delete(
  "/engCard/:id",
  Middleware.protect,
  machineController.deleteEngCard
);

module.exports = router;
