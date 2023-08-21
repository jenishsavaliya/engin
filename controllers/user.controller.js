const { Op } = require("sequelize");
const { admin } = require("../database");
const bcrypt = require("bcrypt");
const soltRound = 10;

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
      req.body.showPassword = req.body.password;
      req.body.password = password;
      req.body.role = "user(eng.)";
      await admin
        .create(req.body)
        .then(() => {
          res.json({
            status: 200,
            message: "User created",
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
      await admin
        .findAll({ where: { role: "User(Eng.)" } })
        .then((data) => {
          res.json({
            status: 200,
            list: data,
            message: "User list data founded",
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
      if (req.body.password) {
        let password = await new Promise((resolve, reject) => {
          bcrypt.genSalt(soltRound, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
              resolve(hash);
            });
          });
        });
        req.body.password = password;
      }
      await admin
        .update(req.body, { where: { id: id } })
        .then(() => {
          res.json({
            status: 200,
            message: "User detail updated",
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
      await admin
        .destroy({ where: { id: req.params.id } })
        .then(() => {
          res.json({
            status: 200,
            message: "User list data deleted",
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
