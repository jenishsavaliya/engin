const {
  customer,
  machine,
  machineComplain,
  uploadDoc,
} = require("../database");
const fs = require("fs");

module.exports = {
  create: async (req, res) => {
    try {
      await machineComplain
        .create(req.body)
        .then((data) => {
          if (req.files.length !== 0) {
            req.files.map(async (file) => {
              await uploadDoc.create({
                name: file.originalname,
                path: file.path,
                machineComplainId: data.dataValues.id,
              });
            });
          }
          res.json({
            status: 200,
            message: "Machine Complain created",
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
      await machineComplain
        .findAll({ include: [customer, machine, uploadDoc] })
        .then((data) => {
          res.json({
            status: 200,
            list: data,
            message: "Machine compalain data founded",
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

  getComplainByCustomer: async (req, res) => {
    try {
      let { id } = req.params;
      await machineComplain
        .findAll({
          where: { customerId: id },
          include: [customer, machine, uploadDoc],
        })
        .then((data) => {
          res.json({
            status: 200,
            data: data[0],
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
  delete: async (req, res) => {
    try {
      await machineComplain
        .destroy({ where: { id: req.params.id } })
        .then(() => {
          res.json({
            status: 200,
            message: "Machine Complain deleted",
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
  deleteDoc: async (req, res) => {
    try {
      const data = await uploadDoc.findOne({
        where: { id: req.params.id },
      });
      await uploadDoc
        .destroy({ where: { id: req.params.id } })
        .then(() => {
          if (data) {
            fs.stat(data.path, (err, stats) => {
              if (err) {
                console.log("err----->", err);
                res.json({
                  status: 200,
                  message: "Machine Complain deleted",
                });
              } else {
                fs.unlink(data.path, (deleteErr) => {
                  if (deleteErr) {
                    res.json({
                      status: 500,
                      message: "Something went wrong",
                    });
                  } else {
                    res.json({
                      status: 200,
                      message: "Machine Complain deleted",
                    });
                  }
                });
              }
            });
          } else {
            res.json({
              status: 404,
              message: "Machine record not found",
            });
          }
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
