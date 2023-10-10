const { customer, admin } = require("../database");

module.exports = {
  create: async (req, res) => {
    try {
      let password = await new Promise((resolve, reject) => {
        bcrypt.genSalt(soltRound, function (err, salt) {
          bcrypt.hash(req.body.password, salt, function (err, hash) {
            resolve(hash);
          });
        });
      });
      req.body.password = password;
      await customer
        .create(req.body)
        .then(() => {
          res.json({
            status: 200,
            message: "Customer created",
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
      await customer
        .findAll({ include: [admin] })
        .then((data) => {
          res.json({
            status: 200,
            list: data,
            message: "Customer list data founded",
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
      await customer
        .update(req.body, { where: { id: id } })
        .then(() => {
          res.json({
            status: 200,
            message: "Customer detail updated",
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
      await customer
        .destroy({ where: { id: req.params.id } })
        .then(() => {
          res.json({
            status: 200,
            message: "Customer list data deleted",
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
