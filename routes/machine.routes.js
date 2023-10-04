const express = require("express");
const machineController = require("../controllers/machine.controller");
const router = express.Router();
const Middleware = require("../middleware/");

router.post(
  "/machine",
  [Middleware.protect, Middleware.role],
  machineController.create
);
router.post(
  "/machine-report",
  Middleware.protect,
  machineController.createReport
);
router.get("/machine", Middleware.protect, machineController.get);
router.get(
  "/machine/:id",
  Middleware.protect,
  machineController.getMachineByCustomer
);
router.get(
  "/machine-report/:id",
  Middleware.protect,
  machineController.getMachineReportById
);
router.get(
  "/machine-report",
  Middleware.protect,
  machineController.getMachineReports
);
router.put("/machine/:id", Middleware.protect, machineController.update);
router.put(
  "/machine-report/:id",
  Middleware.protect,
  machineController.updateReport
);
router.delete("/machine/:id", Middleware.protect, machineController.delete);

module.exports = router;
