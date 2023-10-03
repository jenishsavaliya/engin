const { customer, machine, engCard, machineReport } = require("../database");

module.exports = {
  create: async (req, res) => {
    try {
      await engCard
        .create(req.body)
        .then(() => {
          res.json({
            status: 200,
            message: "Card created",
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
  update: async (req, res) => {
    try {
      let { id } = req.params;
      let { body } = req;
      await engCard
        .update(body, { where: { id: id } })
        .then(() => {
          res.json({
            status: 200,
            message: "Eng card updated",
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
      await engCard
        .destroy({ where: { id: req.params.id } })
        .then(() => {
          res.json({
            status: 200,
            message: "Eng card deleted",
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
