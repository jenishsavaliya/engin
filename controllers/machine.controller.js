const { customer, machine, engCard, machineReport } = require("../database");

module.exports = {
  create: async (req, res) => {
    try {
      if (req.body.servicesDates) {
        let servicesDates = JSON.stringify(req.body.servicesDates);
        req.body.servicesDates = servicesDates;
      }
      await machine
        .create(req.body)
        .then((data) => {
          if (req.body.cards && req.body.cards.length > 0) {
            req.body.cards.map(async (card) => {
              card.machineId = data.dataValues.id;
              await engCard.create(card);
            });
          }
          res.json({
            status: 200,
            message: "Machine created",
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
  createReport: async (req, res) => {
    try {
      await machineReport
        .create(req.body)
        .then((data) => {
          res.json({
            status: 200,
            message: "Machine Report created",
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
      await machine
        .findAll({ include: [customer, engCard] })
        .then((data) => {
          res.json({
            status: 200,
            list: data,
            message: "Machine list data founded",
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
  getMachineByCustomer: async (req, res) => {
    try {
      let { id } = req.params;
      await machine
        .findAll({ where: { customerId: id }, include: [customer, engCard] })
        .then((data) => {
          res.json({
            status: 200,
            list: data,
            message: "Machine list data founded",
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
  getMachineByID: async (req, res) => {
    try {
      let { id } = req.params;
      await machine
        .findAll({ where: { customerId: id }, include: [customer, engCard] })
        .then((data) => {
          res.json({
            status: 200,
            list: data,
            message: "Machine list data founded",
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
  getMachineReportById: async (req, res) => {
    try {
      let { id } = req.params;
      await machine
        .findAll({ where: { id: id }, include: [engCard] })
        .then((data) => {
          res.json({
            status: 200,
            list: data,
            message: "Machine report data",
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
  getMachineReports: async (req, res) => {
    try {
      await machineReport
        .findAll()
        .then((data) => {
          res.json({
            status: 200,
            list: data,
            message: "Machine report data",
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
      if (req.body.servicesDates) {
        let servicesDates = JSON.stringify(req.body.servicesDates);
        req.body.servicesDates = servicesDates;
      }
      let { id } = req.params;
      let { body } = req;
      await machine
        .update(body, { where: { id: id } })
        .then(() => {
          if (body && body.cards.length > 0) {
            body.cards.map(async (card) => {
              await engCard.update(card, { where: { id: card.id } });
            });
            res.json({
              status: 200,
              message: "Machine detail updated",
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
      res.status(500).json({
        status: 500,
        message: "something went wrong",
      });
    }
  },
  updateReport: async (req, res) => {
    try {
      let { id } = req.params;
      let { body } = req;
      await machineReport
        .update(body, { where: { id: id } })
        .then(() => {
          res.json({
            status: 200,
            message: "Machine report updated",
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
      await machine
        .destroy({ where: { id: req.params.id } })
        .then(() => {
          res.json({
            status: 200,
            message: "Machine data deleted",
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
  deleteReport: async (req, res) => {
    try {
      await machineReport
        .destroy({ where: { id: req.params.id } })
        .then(() => {
          res.json({
            status: 200,
            message: "Machine report deleted",
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
  deleteEngCard: async (req, res) => {
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
