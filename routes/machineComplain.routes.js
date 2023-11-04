const express = require("express");
const router = express.Router();
const Middleware = require("../middleware/");
const machineComplainController = require("../controllers/machineComplain.controller");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post(
  "/machine-complain",
  [Middleware.protect, Middleware.role, upload.array("images", 5)],
  machineComplainController.create
);
router.get(
  "/machine-complain",
  Middleware.protect,
  machineComplainController.get
);
router.get(
  "/complain-by-customer/:id",
  Middleware.protect,
  machineComplainController.getComplainByCustomer
);
router.delete(
  "/machine-complain/:id",
  Middleware.protect,
  machineComplainController.delete
);
router.delete(
  "/delete-upload-doc/:id",
  Middleware.protect,
  machineComplainController.deleteDoc
);

module.exports = router;