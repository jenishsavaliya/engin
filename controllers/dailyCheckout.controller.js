const { dailyCheckout, machine, customer } = require("../database");

module.exports = {
  create: async (req, res) => {
    try {
      await dailyCheckout
        .create(req.body)
        .then(() => {
          res.json({
            status: 200,
            message: "Checkout created",
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
      await dailyCheckout
        .findAll({ include: [machine] })
        .then((data) => {
          res.json({
            status: 200,
            list: data,
            message: "Checkout data founded",
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
  getByMachine: async (req, res) => {
    try {
      await dailyCheckout
        .findAll({
          where: { customerId: req.params.id },
          include: [machine, customer],
        })
        .then((data) => {
          res.json({
            status: 200,
            list: data,
            message: "Checkout data founded",
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
      await dailyCheckout
        .update(req.body, { where: { id: id } })
        .then(() => {
          res.json({
            status: 200,
            message: "Checkout detail updated",
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
      await dailyCheckout
        .destroy({ where: { id: req.params.id } })
        .then(() => {
          res.json({
            status: 200,
            message: "Checkout deleted deleted",
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
