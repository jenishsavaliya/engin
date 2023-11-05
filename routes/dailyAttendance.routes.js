const express = require("express");
const dailyAttendace = require("../controllers/dailyAttendace.controller");
const router = express.Router();
const Middleware = require("../middleware/");

router.post("/attendace", Middleware.protect, dailyAttendace.create);
router.get("/attendace", Middleware.protect, dailyAttendace.get);
router.get(
  "/attendace-by-user/:id",
  Middleware.protect,
  dailyAttendace.getByUser
);
router.put("/attendace/:id", Middleware.protect, dailyAttendace.update);
router.delete("/attendace/:id", Middleware.protect, dailyAttendace.delete);

module.exports = router;
