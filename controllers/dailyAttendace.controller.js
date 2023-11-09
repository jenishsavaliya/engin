const { dailyAttendance, admin } = require("../database");

module.exports = {
  create: async (req, res) => {
    try {
      await dailyAttendance
        .create(req.body)
        .then(() => {
          res.json({
            status: 200,
            message: "Attandance created",
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            message: err.message,
          });
        });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: "something went wrong",
      });
    }
  },
  get: async (req, res) => {
    try {
      await dailyAttendance
        .findAll({ include: [admin] })
        .then((data) => {
          res.json({
            status: 200,
            list: data,
            message: "Attandace data founded",
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            message: err.message,
          });
        });
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  getByUser: async (req, res) => {
    try {
      await dailyAttendance
        .findAll({ where: { adminId: req.params.id }, include: [admin] })
        .then((data) => {
          res.json({
            status: 200,
            list: data,
            message: "Attandace data founded",
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            message: err.message,
          });
        });
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
  update: async (req, res) => {
    try {
      let { id } = req.params;
      await dailyAttendance
        .update(req.body, { where: { id: id } })
        .then(() => {
          res.json({
            status: 200,
            message: "attendace detail updated",
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            message: err.message,
          });
        });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: "something went wrong",
      });
    }
  },
  updateStatus: async (req, res) => {
    try {
      let { id } = req.params;
      await dailyAttendance
        .update(req.body, { where: { id: id } })
        .then(() => {
          res.json({
            status: 200,
            message: "attendace status updated",
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            message: err.message,
          });
        });
    } catch (err) {
      res.status(500).json({
        status: 500,
        message: "something went wrong",
      });
    }
  },
  delete: async (req, res) => {
    try {
      await dailyAttendance
        .destroy({ where: { id: req.params.id } })
        .then(() => {
          res.json({
            status: 200,
            message: "Attandance deleted deleted",
          });
        })
        .catch((err) => {
          res.json({
            status: 500,
            message: err.message,
          });
        });
    } catch (err) {
      res.status(500).json(err.message);
    }
  },
};
